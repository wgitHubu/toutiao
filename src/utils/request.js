import axios from 'axios'
// axios.defaults.baseURL = 'http://toutiao.itheima.net'
// axios.defaults.timeout = 5000

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net',
  timeout: 5000
})
export default request
