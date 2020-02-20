import axios from 'axios'
import config from '@/config'

const baseApi = axios.create({
    baseURL: baseUrl,
})

// 拦截 拼接http header
baseApi.interceptors.request.use(function (config) {
 
})
// baseApi.headers.post['Content-Type'] = 'application/json';
baseApi.interceptors.response.use(function (resp) {
    return resp.data;
}, (error) => {
    return analizeCode(error)
})
function analizeCode(error) {
    Vue.prototype.$Message.warning("请求出错");
    return Promise.reject(error);;
}

export {
    baseApi
}