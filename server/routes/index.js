import Router from 'koa-router'
import { base_API } from "../config"
//引入我们的登录注册控制器
import UserController from '../Controller/UserController'
//引入文章相关的控制器
import ArticleController from '../Controller/ArticleController'
//引入验证token合法性的方法
import checkToken from '../utils/checkToken'

const router = new Router()
router.get('/',async ctx=>{
    ctx.body = '欢迎使用vue-blog接口测试服务器!!!!!'
})
//所有的路由都写在这里就可以了
//前端所有的请求发过来的时候都是http://localhost:3000/api/.....
router.prefix(`${base_API}`)

//登录
router.post('/login',UserController.login)
//退出
//只要是登录后才能看到的内容都需要验证一下token的合法性.
router.get('/logout',checkToken,UserController.logout)
//获取所有的文章
router.get('/articles',checkToken,ArticleController.getArticles)
//添加一篇新的文章
router.post('/articles/add',checkToken,ArticleController.addArticle)
//查询一下最新发布的那片文章的详细信息
router.get('/articles/:id',checkToken,ArticleController.getOneArticle)
//更新一篇新的文章
router.post('/articles/update/:id',checkToken,ArticleController.updateArticle)
export default router