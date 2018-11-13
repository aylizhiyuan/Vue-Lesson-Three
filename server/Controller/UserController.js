/*
const login = async ctx=>{

}

export default {
    login
}*/
//这是以前我们的写法，通常我们都会把处理过程写成函数，直接暴露函数即可。
//以后，我们在写方法的时候，直接要使用ES6 class类

class UserController {
    //登录的处理逻辑在这里
    async login(ctx){

        //验证用户名/密码是否合法

        //检查用户名是否存在

        //检查密码是否正确

        //生成token

        //最后返回token

    }
}
export default new UserController()
