import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//引入登录组件
import Login from '@/components/Login'
//引入主页面组件
import List from '@/components/List'
//引入标签页面
import Tags from '@/components/Tags'
//引入关于我页面
import About from '@/components/About'
export default new Router({
  routes: [
    {
      path:'/login',
      component:Login
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/tags',
      component:Tags
    },
    {
      path:'/about',
      component:About
    },
    {path:'*',redirect:'/login'}
  ]
})
