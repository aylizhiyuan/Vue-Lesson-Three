<template>
  <div style="height:100%">
    <head-nav></head-nav>
    <Aside></Aside>
    <div class="list-container main">
      <h2>
        文章列表 /
        <span>ARTICLE LIST</span>
      </h2>
      <hr>
      <main>
        <div class="article-list">
          <section class="btn-container">
            <button id="add" class="not-del" @click="postArticle">新文章</button>
          </section>
          <!--文章列表的组件-->
          <article-list ref="articleList"></article-list>
        </div>
        <!--编辑器的组件-->
        <editor></editor>
      </main>
    </div>
  </div>
</template>
<script>
    import Aside from '@/components/common/Aside'
    import HeadNav from '@/components/common/HeadNav'
    import ArticleList from '@/components/common/ArticleList'
    import Editor from '@/components/common/Editor'
    export default {
      name: "List",
      data(){
        return {
          ArticleList:[]
        }
      },
      components:{
        Aside,
        HeadNav,
        ArticleList,
        Editor
      },
      methods:{
        //发表文章的方法
        postArticle(){

        }
      }
    }
</script>

<style type="text/scss" lang="scss" scoped>
  /*记得引入全局变量的文件*/
  @import '../assets/style/variable';
  main {
    @include flex($justify: space-between);
    height: calc(100% - 48px);
    padding: 0.5em 0;
  }
  .article-list {
    width: 40%;
    height: 100%;
    overflow: auto;
    padding: 0 0.8em 0.5em 0;
    .list {
      padding: 0;
      list-style: none;
    }
  }
  .editor {
    width: 58%;
    height: 100%;
    padding: 0 0.8em 0.5em 0;
    overflow: auto;
  }
</style>
