const mutations = {
  SET_TOKEN:(state,token)=>{
    state.token = token
  },
  SET_USERNAME:(state,username)=>{
    state.username = username
  },
  //设置当前正在编辑的文章，将它存放到vuex中...
  SET_CURRENT_ARTICLE:(state,{id,title,tags,content,isPublished})=>{
    state.id = id
    state.title = title
    state.tags = tags
    state.content = content
    state.isPublished = isPublished
  },
  //设置文章是否删除
  SET_DELETE_ARTICLE:(state)=>{
    state.toggleDelete = !state.toggleDelete
  },
  //设置当前文章已经发布的状态
  SET_PUBLISH_STATE:(state)=>{
    state.isPublished = 1
  }
}
export default mutations
