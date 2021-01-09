import { createStore, Commit } from "vuex";
import  {testColumns, testPosts, mockToken, mockLoginData } from './testData';
import { GlobalDataProps, GlobalErrorProps } from './types'
import { axios, AxiosRequestConfig } from '../libs/http'
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
        columns: testColumns,
        posts: testPosts,
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
            return state.columns;
        },
        getColumnById: state => (id: number | string) => {
            return state.columns[+id-1];
        },
        getPostsByCid: state => (cid: number | string) => {
            return state.posts.filter(item => (+item.column === +cid));
        },
        getCurrentUser: (state) => {
            return state.user;
        }
    },

    mutations: {
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
    },

    actions: {

        // 登陆之后获取用户登录信息
        fetchCurrentUser ({ commit }) {
            return asyncAndCommit('/api/user/current', 'fetchCurrentUser', commit);
        },

        register ({commit}, registerInfo) {
            return asyncAndCommit('/api/users', 'register', commit,  { method: 'post', data: registerInfo })
        },

        loginAndFetch (params, loginParam) {
            console.log(params);
            return params.dispatch('login', loginParam).then(() => {
                params.dispatch('fetchCurrentUser')
            })
        },

        login ({ commit }, loginParam) {
            return asyncAndCommit('/api/user/login', 'login', commit, { method: 'post', data: loginParam });
        }
    }
})

export default store;