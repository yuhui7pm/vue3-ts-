import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import ColumnDetail from './views/ColumnDetail.vue';
import Login from './views/Login.vue';

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
        component: ColumnDetail
    }, {
        name: 'Login',
        path: '/login',
        component: Login,
        meta: {
            requireLogin: true  // 路由元信息，帮助路由拦截
        }
    }]
});

// router.beforeEach((to, from ,next) => {

// });

export default router;

