import router  from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from "@/utils/auth"

//1.创建白名单，哪些页面是不需要权限的
const whiteList = ['/login']
//2.设置在页面跳转之前的一些权限判断操作
//to 即将要跳转的页面，from是当前所在的页面，next是判断完之后，必须调用next才可以进行下一步的操作
router.beforeEach((to,from,next)=>{
  //开启进度条
  NProgress.start()
  if(getToken()){
    //如果有token值了
    if(to.path === '/login'){
      next({path:'/list'})
      NProgress.done();//进度条结束
    }else{
      next() //正常进行页面跳转
    }
  }else{
    //没有token值的情况
    if(whiteList.indexOf(to.path) !== -1){
      next()
    }else{
      //不在白名单里面，也没有token值
      next({path:'/login'})
      NProgress.done()
    }
  }
})
router.afterEach(()=>{
  NProgress.done() //结束进度条
})
