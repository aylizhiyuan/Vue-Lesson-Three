import jwt from 'jsonwebtoken'
import { secret } from "../config"

export default function createToken(user_id){
    const token = jwt.sign({
        user_id:user_id  //使用用户名字符串作为token的凭证
    },secret,{
        expiresIn:"24h"
    })
    //secret是加密的密钥，验证的时候会用到.
    return token;
}