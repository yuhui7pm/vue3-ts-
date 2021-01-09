import axios, {AxiosRequestConfig} from 'axios';
import store from '../store';


axios.defaults.baseURL = 'http://apis.imooc.com/';

axios.interceptors.request.use(config => {
    config.params = {
        ...config.params,
        icode: 'CA6C4086133360B'
    };
    store.commit('setLoading', true);
    store.commit('setError', { status: false, message: '' })
    return config;
})

axios.interceptors.response.use(res => {
    store.commit('setLoading', false);
    return res;
}, err => {
    const { error } = err.response.data;
    store.commit('setError', { status: true, message: error });
    store.commit('setLoading', false);
    return Promise.reject(error);
})

export {
    axios,
    AxiosRequestConfig
}