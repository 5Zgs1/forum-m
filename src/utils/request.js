// 请求模块
import axios from 'axios'
import store from '@/store'
const request = axios.create({
  // 接口的基准路径
  baseURL: 'http://toutiao.itheima.net'
})
// 请求拦截器
request.interceptors.request.use(function (config) {
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = 'Bearer ' + user.token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器

// 导出
export default request
