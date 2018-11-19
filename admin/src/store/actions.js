//封装的请求request
import request from '@/utils/request'
//actions里面的方法和mutations里面的方法的主要区别在于,actions里面可以写异步代码，而mutations里面
//只能写同步代码，所以，通常情况下，我们会把业务代码放在actions里面.
const actions = {
  async saveArticle({commit,state},{id,title,tags,content,isPublished}){
    request({
      method:'post',
      url:`/articles/update/${id}`,
      data:{
        title,
        tags,
        content,
        isPublished
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    commit('SET_CURRENT_ARTICLE',{id,title,tags,content,isPublished})
  }
}
export default actions
