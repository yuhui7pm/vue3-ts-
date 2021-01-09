import { createStore, Commit } from "vuex";
import  {testColumns, testPosts } from './testData';
import { GlobalDataProps, GlobalErrorProps } from './types'
import { axios, AxiosRequestConfig } from '../libs/http'

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
        token: '',
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
    },

    actions: {
        fetchCurrentUser ({ commit }) {
            return asyncAndCommit('/api/user/current', 'fetchCurrentUser', commit);
        }
    }
})

export default store;