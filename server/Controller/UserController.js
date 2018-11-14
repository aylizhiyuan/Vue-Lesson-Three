/*
const login = async ctx=>{

}

export default {
    login
}*/
//这是以前我们的写法，通常我们都会把处理过程写成函数，直接暴露函数即可。
//以后，我们在写方法的时候，直接要使用ES6 class类
import User from '../model/UserModel'
import md5 from 'md5'
import createToken from '../utils/createToken'
class UserController {
    //登录的处理逻辑在这里
    async login(ctx){
        let user = ctx.request.body.user
        let password = ctx.request.body.password
        //验证用户名/密码是否合法
        //验证省略了
        //检查用户名是否存在
        //所有的对于数据库的操作，我们不在控制器里面完成，我们在数据库直接封装成一个方法
         const res = (await User.getUserByName(user))[0]
        //console.log(res);
         if(res){
             //如果存在
             //检查密码是否正确
             if(res.password === md5(password)){
                 //生成token
                 let token = createToken(res.user)
                 //最后返回token
                 ctx.body = {
                     success:true,
                     message:'登录成功...',
                     token:token
                 }
             }else{
                 ctx.body = {
                     success:false,
                     message:'密码错误,请重新填写...'
                 }
             }
         }else{
             ctx.body = {
                 success:false,
                 message:'用户名不存在,请重新填写.....'
             }
         }
    }
    async logout(ctx){
        ctx.body = {
            success:true,
            message:'退出成功'
        }
    }
}
export default new UserController()
