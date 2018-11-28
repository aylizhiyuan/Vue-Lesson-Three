<template>
    <div>
      <ul class="list">
        <li class="article"  :class="{active: activeIndex === index, published: isPublished === 1}" v-for="{title,createTime,isPublished,isChosen},index in articleList" @click="select(index)" v-if="isChosen">
          <header>{{title}}</header>
          <p>{{createTime}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
  import request from '@/utils/request'
  import moment from 'moment'
  import { mapState,mapMutations } from 'vuex'
  export default {
    name: "ArticleList",
    data(){
      return {
        articleList:[],
        activeIndex:-1
      }
    },
    //把全局的vuex里面的state和mutations放到计算属性中...
    computed:{
      ...mapState(['id','title','tags','content','isPublished','toggleDelete']),
    },
    //当该组件创建的时候自动执行里面的请求
    created(){
      request({
        method:'get',
        url:'/articles'
      }).then(res=>{
        for(let article of res){
          article.createTime = moment(article.createTime).format('YYYY年-MM月-DD日 HH:mm:ss')
          article.isChosen = true
        }
        this.articleList.push(...res)
        //如果查询出文章，则将第一篇文章作为正在编辑的文章
        if(this.articleList.length !== 0){
          this.SET_CURRENT_ARTICLE(this.articleList[0])
          this.activeIndex = 0;
          //将所有的标签查出来，集中放在tags里面
          const tags = [];
          for(let article of this.articleList){
            if(article.tags){
              for(let tag of article.tags.split(',')){
                if(tags.indexOf(tag) === -1){
                  tags.push(tag)
                }
              }
            }
          }
          this.$emit('tags',tags);
        }
      }).catch(err=>{
        console.log(err)
      })
    },
    methods:{
      updateList(updateId){
        request({
          method:"get",
          url:`/articles/${updateId}`
        }).then(res=>{
          const article = res[0]
          article.createTime = moment(article.createTime).format('YYYY年-MM月-DD日 HH:mm:ss')
          article.isChosen = true
          this.articleList.unshift(article)
          //如果发布了新文章的话，当前被选中的文章下标自动 + 1
          this.activeIndex ++
        }).catch(err=>{
          console.log(err);
        })
      },
      updateListByTags(chosenTags){
        //如果没有选中任何标签，直接显示所有的文章.
        if(chosenTags.length === 0){
          for(let article of this.articleList){
            article.isChosen = true
          }
        }else{
          //如果选中了某些标签的话
          for(let article of this.articleList){
            let flag = false
            for(let tag of chosenTags){
              if(article.tags.indexOf(tag) !== -1){
                flag = true
              }
            }
            //标签对应的文章的isChosen设置为true,否则的话设置为false
            if(flag){
              article.isChosen = true
            }else{
              article.isChosen = false
            }
          }
          //这里，意思是将最后一篇文章选中作为当前正在编辑的文章
          for(let [index,article] of this.articleList.entries()){
            if(article.isChosen){
              this.activeIndex = index
              console.log(this.activeIndex);
              this.SET_CURRENT_ARTICLE(this.articleList[this.activeIndex])
              //发现第一篇文章后就跳出了，所有就不用管第二篇文章了
              break
            }
          }
        }
      },
      select(index){
        this.activeIndex = index
        //当你在选择文章的时候，当前被选中的文章扔到全局状态管理里面
        this.SET_CURRENT_ARTICLE(this.articleList[index])
      },
      ...mapMutations(['SET_CURRENT_ARTICLE'])
    },
    //监听vuex数据的变化，如果发生变化，更新articleList数据
    watch:{
      title(val){
        if(this.articleList.length !== 0){
          this.articleList[this.activeIndex].title = val
        }
      },
      tags(val){
        if(this.articleList.length !== 0){
          this.articleList[this.activeIndex].tags = val
        }
      },
      content(val){
        if(this.articleList.length !== 0){
          this.articleList[this.activeIndex].content = val
        }
      },
      isPublished(val){
        if(this.articleList.length !== 0){
          this.articleList[this.activeIndex].isPublished = val
        }
      },
      toggleDelete(val){
        //如果这个值有变化，从false变为true,说明当前文章是需要删除的.
        this.articleList.splice(this.activeIndex,1)
        if(this.activeIndex === this.articleList.length){
          this.activeIndex --
        }
        if(this.articleList.length !== 0){
          this.SET_CURRENT_ARTICLE(this.articleList[this.activeIndex])
        }else{
          this.SET_CURRENT_ARTICLE({
            id:'',
            title:'',
            tags:'',
            content:'',
            isPublished:''
          })
        }
      }
    }
  }
</script>
<style type="text/scss"  lang="scss" scoped>
  /*记得引入全局变量的文件*/
  @import '../../assets/style/variable';
  .article {
  @include flex($flow: column wrap, $align: flex-start);
    padding: 0.2em 0.5em;
    margin-bottom: 1.5em;
    height: 5em;
    max-width: 100%;
    background: $white;
    border: 0.1em solid $special;
    cursor: pointer;
  header {
    max-width: 100%;
    font-size: 1.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.2em;
  }
  p {
    margin: 0;
    color: $special;
  }
  &:last-child {
     margin-bottom: 0;
   }
  }
  .active {
    border: 1px solid $base;
  }
  .published {
    border-right: 4px solid $base;
  }
</style>
