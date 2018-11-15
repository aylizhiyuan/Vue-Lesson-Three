<template>
    <div class="editor">
      <input type="text" class="title" id="title">
      <div class="operate-bar">
        <section class="tag-container">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tag"></use>
          </svg>
          <ul class="tags">
            <li class="tag">
              标签
              <sup>x</sup>
            </li>
          </ul>
          <input type="text" class="tag-input" id="tag-input">
          <span class="tag-add">+</span>
        </section>
        <section class="btn-container">
          <button id="delete" class="delete">删除文章</button>
          <button id="submit" class="not-del">发布文章</button>
        </section>
      </div>
      <p class="tips">标签查询页面只能批量更改标签，修改的文章内容会自动保存</p>
      <div class="content">
        <textarea></textarea>
      </div>
    </div>
</template>
<script>
    //引入编辑器
    import 'simplemde/dist/simplemde.min.css'
    import SimpleMDE from 'simplemde'
    export default {
        name: "Editor",
        data(){
          return {
            simplemde:'',
          }
        },
        mounted(){
          this.simplemde = new SimpleMDE({
            placeholder:'Talk to me , what are you say...',
            spellChecker:false,
            toolbarTips: false,
          });
        }
    }
</script>

<style type="text/scss" lang="scss" scoped>
  /*记得引入全局变量的文件*/
  @import '../../assets/style/variable';
  .title {
    margin-bottom: 0.3em;
    width: 100%;
    height: 2em;
    border: none;
    font-size: 2.4rem;
    color: $title;
    outline: none;
    border-bottom: 1px solid $special;
    background: none;
    text-align: center;
  }
  .operate-bar {
    @include flex($justify: space-between);
    height: 4em;
    font-size: 1.3rem;
    margin-bottom: 1em;
    .tag-container {
      @include flex($justify: flex-start);
      .icon {
        width: 1.5em;
        height: 1.5em;
        margin-right: 10px;
      }
      .tags {
        @include flex;
        list-style: none;
        margin-right: 10px;
        padding: 0;
        .tag {
          margin-right: 10px;
          color: $base;
          position: relative;
          &:last-child {
            margin-right: 0px;
          }
        }
      }
      .tag-add {
        font: {
          weight: 600;
          size: 1.6rem;
        }
        color: $special;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .tips {
    color: $quote;
    text-align: center;
  }
  .content {
    font-size: 1.6rem;
  }
</style>
