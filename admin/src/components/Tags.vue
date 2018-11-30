<template>
    <div style="height:100%">
      <head-nav></head-nav>
      <Aside></Aside>
      <div class="tag-container main">
        <!--tags内容-->
        <h2>标签筛选 /
          <span>CHOOSE BY TAG</span>
        </h2>
        <hr>
        <main>
          <div class="tag-list">
            <section class="tag">
              <h5>标签</h5>
              <ul class="tags" @click="chooseTag($event)">
                <li class="tag" :class="{chosen:chosenTags.indexOf(tag) > -1}" v-for="tag,index in tags" :key="tag">{{tag}}</li>
              </ul>
            </section>
            <section class="chosen-tag" v-show="chosenTags.length">
              <h5>修改标签</h5>
              <ul class="tags">
                <li class="tag-edit" v-for="tag,index in chosenTags">
                  <input type="text" :value="tag" @change="changeTag($event,index)" class="tag-input">
                  <sup @click="deleteTag(tag,index)">x</sup>
                </li>
              </ul>
            </section>
            <article-list v-on:tags="getTags" ref="articleList"></article-list>
          </div>
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
  import request from '@/utils/request'
  export default {
    name: "Tags",
    components:{
      Aside,
      HeadNav,
      ArticleList,
      Editor
    },
    data(){
      return {
        tags:[],
        chosenTags:[]
      }
    },
    methods:{
      chooseTag(evt){
        if(evt.target.tagName === 'LI'){
          const value = evt.target.innerHTML
          //第一次选中它，并扔到数组里面去，第二次将它从数组当中去掉
          if(!evt.target.classList.contains('chosen')){
            this.chosenTags.push(value)
          }else{
            this.chosenTags = this.chosenTags.filter(val=>val !== value)
          }
        }
        //当你选中特定的标签的时候，更新文章列表显示的内容
        this.$refs.articleList.updateListByTags(this.chosenTags);
      },
      getTags(tags){
        this.tags.push(...tags)
      },
      changeTag(evt,i){
        const oldVal = this.chosenTags[i];
        const newVal = evt.target.value;
        if(!newVal){
          alert('请直接删除tag!')
          evt.target.value = oldVal;
          return
        }
        //当前修改标签的在tags里面的下标.
        const tagIndex = this.tags.indexOf(oldVal);
        //所有标签的列表中是否有这个即将要写入的新值，如果没有的话
        if(this.tags.indexOf(newVal) !== -1){
          //如果你要写的值跟标签列表有重复的话
          //从选中的标签列表中将当前正在写的标签删除掉
          this.chosenTags.splice(i,1)
          //从所有的标签列表中将正在写的重复的标签删除掉
          //console.log(this.tags);
          //console.log(tagIndex);
          this.tags.splice(tagIndex,1)
        }else{
          //如果写的值不重复的话，就直接进行替换
          this.chosenTags.splice(i,1,newVal)
          this.tags.splice(tagIndex,1,newVal)
        }
        //两种情况：
        //1.旧标签的某一个篇文章新值已经存在了,直接将旧值删除.
        //2.旧标签的某一篇文章新值不存在，将旧值替换成新值.
        this.$refs.articleList.updateArticleTag(oldVal, newVal, this.chosenTags)
      },
      deleteTag(tag,i){

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

  .tag-list {
    width: 40%;
    height: 100%;
    overflow: auto;
    padding: 0 0.8em 0.5em 0;
  .tags {
  @include flex($justify: flex-start);
    list-style: none;
    margin-bottom: 2em;
    padding: 0;
  .tag {
    margin: 0 1em 1em 0;
    padding: 0.3em;
    color: $base;
    border-radius: 2px;
    border: 1px solid $base;
    cursor: pointer;
  }
  .chosen {
    color: $white;
    background: $base;
  }

  .tag-edit {
    margin-right: 3px;
  }
  }
  .list {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  }

  .editor {
    width: 58%;
    height: 100%;
    padding: 0 0.8em 0.5em 0;
    overflow: auto;
  }
</style>
