// 请求模块
import axios from 'axios'

const request = axios.create({
  // 接口的基准路径
  baseURL: 'http://toutiao.itheima.net'
})
// 请求拦截器

// 响应拦截器

// 导出
export default request