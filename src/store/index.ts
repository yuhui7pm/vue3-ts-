import { createStore } from "vuex";
import  {testColumns, testPosts } from './testData';
import { GlobalDataProps } from './types'

const store = createStore<GlobalDataProps>({
    state: {
        columns: testColumns,
        posts: testPosts,
        user: {
            isLogin: false,
            nickName: '啦啦啦'
        }
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
        }
    }
})

export default store;