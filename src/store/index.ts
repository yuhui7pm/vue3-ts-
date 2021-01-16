import { createStore, Commit } from "vuex";
import  {singleMockColumn, mockToken, mockLoginData, mockColumnRes, columnArticles, mockArticleDetail } from './testData';
import { GlobalDataProps, GlobalErrorProps } from './types'
import { axios, AxiosRequestConfig } from '../libs/http'
import { objToArr, arrToObj } from '../libs/helpers';
import { StorageHandler, storageType } from '../libs/storage'
const storageHandler = new StorageHandler();

const asyncAndCommit = async (url: string, mutationName: string, commit: Commit, 
    config: AxiosRequestConfig = {method: 'get'}, extraData?: any) => {
    const { data } = await axios(url, config)

    if (extraData) {
        commit(mutationName, { data, extraData })
    } else {
        commit(mutationName, data)
    }
    return data
}

const store = createStore<GlobalDataProps>({
    state: {
        // columns: testColumns,
        // posts: testPosts,
        columns: { data: {}, currentPage: 0, total: 0 },
        posts: { data: {}, loadedColumns: {} }, // 主要是为了作缓存，避免跳转到同一个页面重复发请求
        user: {
            isLogin: false,
            nickName: '啦啦啦'
        },
        loading: false,
        error: {status: false},
        token: storageHandler.getItem(storageType, 'token') || '',
    },

    getters: {
        getColumns: (state) => {
            return objToArr(state.columns.data);
        },
        getColumnById: state => (id: number | string) => {
            return state.columns.data[id];
        },
        getPostsByCid: state => (cid: number | string) => {
            return objToArr(state.posts.data).filter(item => (item.column === cid));
        },
        getCurrentUser: (state) => {
            return state.user;
        },
        getCurrentPost: (state) => (id: string) => {
            return state.posts.data[id];
        }
    },

    mutations: {
        // 主要是为了作缓存，避免跳转到同一个页面重复发请求
        createPost (state, newPost) {
            state.posts.data[newPost._id] = newPost;
        },

        // 主要是为了作缓存，避免跳转到同一个页面重复发请求。
        // 如果不是线上环境，编辑详情提交的时候，会报错。
        // 因为不是线上环境
        updatePost (state, { data }) {
            state.posts.data[data._id] = data;
        },
        // 第一次登陆，存储用户所在专栏信息，后面就不发请求了
        fetchColumn (state, rawDataParam) {
            const rawData = rawDataParam.code === 0 ?  rawDataParam : {
                data: singleMockColumn
            };
            state.columns.data[rawData.data._id] = rawData.data;
        },
        fetchColumns (state, rawData) {
            const { data } = state.columns
            const { list, count, currentPage } = rawData.data || mockColumnRes;
            state.columns = {
                data: { ...data, ...arrToObj(list) },
                total: count,
                currentPage: currentPage * 1
            }
        },
        setUserLoginStatus: (state, rawData) => {
            state.user = Object.assign({}, state.user ,rawData);
        },

        setLoading (state, status) {
            state.loading = status;
        },

        setErrors (state, error: GlobalErrorProps) {
            state.error = error;
        },

        // 保存登录之后的token和请求头信息
        login (state, loginData) {
            const { token } = loginData.data || mockToken;
            state.token = token;
            storageHandler.setItem(storageType, 'token', token);
            axios.defaults.headers.common.Authorization = `Bearer ${token}`
        },

        logout (state) {
            state.token = '';
            state.user = { isLogin: false };
            storageHandler.remove(storageType, 'token'); // 如果退出登录就把保存的token清除
            delete axios.defaults.headers.common.Authorization;
        },

        fetchCurrentUser (state, rawData) {
            state.user = { isLogin: true, ...(rawData.data || mockLoginData) }
        },

        // 第一次登陆，获取用户所在专栏底下的博客简介数据，并保存起来，后面加载相同页面数据，直接读取即可，不用发请求
        fetchPosts (state, { data: rawData, extraData: columnId }) {
            const { data } = state.posts
            const { list, count, currentPage } = rawData.data || columnArticles

            // @ts-ignore  暂时禁用，这个有问题
            state.posts.data = { ...data, ...arrToObj(list) }
            state.posts.loadedColumns[columnId] = {
                columnId: columnId,
                total: count,
                currentPage: currentPage * 1
            }
        },

        // 保存获取到的文章详情页
        fetchPost (state, rawDataParam) {
            const rawData = rawDataParam.data ? rawDataParam : mockArticleDetail;
            if (rawData.data) {
                state.posts.data[rawData.data._id] = rawData.data;
            }
        },

        // 删除详情内容
        deletePost (state, { data }) {
            delete state.posts.data[data?._id || 0]
        },
    },

    actions: {
        fetchColumns ({ state, commit }, params = {}) {
            const { currentPage = 1, pageSize = 6 } = params
            if (state.columns.currentPage < currentPage) {
                return asyncAndCommit(`/api/columns?currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchColumns', commit)
            }
        },

        // 登陆之后获取用户登录信息
        fetchCurrentUser ({ commit }) {
            return asyncAndCommit('/api/user/current', 'fetchCurrentUser', commit);
        },

        register ({commit}, registerInfo) {
            return asyncAndCommit('/api/users', 'register', commit,  { method: 'post', data: registerInfo })
        },

        loginAndFetch (params, loginParam) {
            return params.dispatch('login', loginParam).then(() => {
                params.dispatch('fetchCurrentUser')
            })
        },

        login ({ commit }, loginParam) {
            return asyncAndCommit('/api/user/login', 'login', commit, { method: 'post', data: loginParam });
        },

        // 新建文章
        createPost ({ commit }, data) {
            return asyncAndCommit('/api/posts', 'createPost', commit, { method: 'post', data })
        },

        // 编辑文章
        updatePost ({ commit }, { id, params: data }) {
            return asyncAndCommit(`/api/posts/${id}`, 'updatePost', commit, {
                method: 'patch',
                data
            })
        },

        // 第一次登陆，获取用户所在专栏信息，后面就不发请求了
        fetchColumn ({ state, commit }, cid) {
            if (!state.columns.data[cid]) {
                return asyncAndCommit(`/api/columns/${cid}`, 'fetchColumn', commit)
            }
        },

        // 第一次登陆，获取用户所在专栏底下的博客简介数据，后面就不发请求了
        fetchPosts ({ commit }, params = {}) {
            const { columnId, currentPage = 1, pageSize = 3 } = params
            return asyncAndCommit(`/api/columns/${columnId}/posts?currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchPosts', commit, { method: 'get' }, columnId)
        },

        // 获取专栏中某一篇文章的详情
        fetchPost ({state, commit}, id) {
            const currentPost = state.posts.data[id];
            if (!currentPost || !currentPost.content) {
                return asyncAndCommit(`/api/posts/${id}`, 'fetchPost', commit);
            } else {
                return Promise.resolve({data: currentPost});
            }
        },

        deletePost ({ commit }, id) {
            return asyncAndCommit(`/api/posts/${id}`, 'deletePost', commit, {
                method: 'delete'
            })
        },
    }
})

export default store;