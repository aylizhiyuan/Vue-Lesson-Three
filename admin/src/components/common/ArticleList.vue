<template>
    <div>
      文章页面
    </div>
</template>

<script>
  import request from '@/utils/request'
  export default {
    name: "ArticleList",
    data(){
      return {
        articleList:[],
      }
    },
    //当该组件创建的时候自动执行里面的请求
    mounted(){
      request({
        method:'get',
        url:'/articles'
      }).then(res=>{
        console.log(res);
        this.articleList.push(...res)
        console.log(this.articleList);
      }).catch(err=>{
        console.log(err)
      })
    }
  }
</script>

<style scoped>

</style>
