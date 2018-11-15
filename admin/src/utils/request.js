import axios from 'axios'
import store from '@/store'
import { getToken,removeToken } from '@/utils/auth'
import Vue from 'vue'

// 创建axios实例
const service = axios.create({
  baseURL: "http://localhost:3000/api", // api 的 base_url
  timeout: 5000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    //这里面可以设置自定义的返回错误
    if(res.code === 40001){
      //token已过期的状态码
      alert('token已经过期,请重新登录！！！！');
      removeToken()
      store.commit('SET_TOKEN','')
      location.reload()
    }else{
      return response.data
    }
  },
  error => {
    //服务器报出来的所有的错误，都会被前端接收到这个位置，这个位置会打印这些错误信息，方便进行调试....
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default service
