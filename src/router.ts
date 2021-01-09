import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import ColumnDetail from './views/ColumnDetail.vue';
import Login from './views/Login.vue';
import store from './store';
import { axios } from './libs/http'

const historyRouter = createWebHistory();
const router = createRouter({
    history: historyRouter,
    routes: [{
        name: 'home',
        path: '/',
        component: Home
    }, {
        name: 'column',
        path: '/column/:id',
        component: ColumnDetail,
    }, {
        name: 'Login',
        path: '/login',
        component: Login,
        meta: {
            redirectAlreadyLogin: true  // 路由元信息，帮助路由拦截
        }
    }]
});

// 路由前置守卫
router.beforeEach((to, from ,next) => {
    const { user, token } = store.state;
    const { redirectAlreadyLogin, requiredLogin } = to.meta;

    if (user.isLogin) {  // 如果已经登录，到登录页会自动跳转到首页
        if (redirectAlreadyLogin) {
            next('/')
        } else {
            next();
        }
    } else {        // 没有登录的话，会根据token来判断是否让用户免登陆
        if (!token) {
            if (requiredLogin) {  // 没有token，并且是必须要登录的页面，就到登录页
                next('login');
            } else {
                next();
            }
        } else {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            store.dispatch('fetchCurrentUser').then(() => {
                if (redirectAlreadyLogin) {
                    next('/');
                } else {
                    next();
                }
            }).catch(err => {
                console.log(err);
                store.commit('logout');
                next('login');
              })
            }
    }
});

export default router;

