import {getToken,setToken,removeToken } from "@/utils/auth"
const state =  {
  //全局变量
  token:getToken(), //登录的凭证
  username:'', //当前登录的用户名称，如果有需要的话，可以存储一些登录用户的信息
  id:'',//正在编辑的文章的ID
  title:'',//编辑文章的标题
  tags:'',//编辑文章的标签列表
  content:'',//编辑文章的内容
  isPublished:'',//文章是否发布
  toggleDelete:false
}
export default state
