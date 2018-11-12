import {getToken,setToken,removeToken } from "@/utils/auth"
const state =  {
  //全局变量
  token:getToken(),
  username:''
}
export default state
