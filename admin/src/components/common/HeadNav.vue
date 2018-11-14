<template>
  <nav class="head-nav">
    <div class="logo-container">
      <img src="@/assets/image/logo.png" alt="" class="logo">
    </div>
    <div class="content-container">
      <section>
        <h4 class="title">
          李志远博客系统
        </h4>
      </section>
      <a class="log-out" @click="logout">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tuichu"></use>
        </svg>
        <span>&nbsp;登出</span>
      </a>
    </div>
  </nav>
</template>

<script>
  import request from '@/utils/request'
  import { removeToken } from "@/utils/auth"
  export default {
    data(){
      return {

      }
    },
    methods:{
      logout(){
        request({
          url:'/logout',
          method:'get'
        }).then(res=>{
          if(res.success == true){
            this.$store.commit('SET_TOKEN','')
            removeToken()
            location.reload();//强制刷新一下当前页面，重新判断下是否具备权限.
          }
        }).catch(err=>{
          console.log(err);
        })
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  /*记得引入全局变量的文件*/
  @import '../../assets/style/variable';
  .head-nav {
    font-family: KaiShu, Arial, sans-serif;
    @include flex($justify: flex-start);
    font-size: 1.6rem;
    height: 3em;
    .logo-container {
      @include flex;
      width: 3em;
      height: inherit;
      border-bottom: 2px solid $word;
    }
    .content-container {
      @include flex($justify: space-between);
      padding: 0.5em;
      height: 100%;
      width: calc(100% - 50px);
      border-bottom: 2px solid $base;
      .log-out {
        @include flex;
        color: $word;
      }
    }
    h4 {
      @include flex;
      margin: 0;
    }
    .subhead {
      width: 130px;
    }
    .log-out {
      cursor: pointer;
    }
  }
</style>

