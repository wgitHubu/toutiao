import axios from 'axios'
import store from '@/store'
// axios.defaults.baseURL = 'http://toutiao.itheima.net'
// axios.defaults.timeout = 5000

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net',
  timeout: 5000
})
// 请求拦截器
request.interceptors.request.use(
  function (config) {
    const {
      getters: { isLogin },
      state: { tokenObj }
    } = store
    if (isLogin) {
      config.headers.Authorization = `Bearer ${tokenObj.token} `
    }
    return config
  }
  // function (error) {
  //   console.log('111')
  // }
)
export default request
