<template>
  <aside class="side-nav">
    <router-link to="/lists" class="link">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
      <p class="descript">列表</p>
    </router-link>
    <router-link to="/tags" class="link">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tag"></use>
      </svg>
      <p class="descript">标签</p>
    </router-link>
    <router-link to="/readinglists" class="link">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yuedu"></use>
      </svg>
      <p class="descript">阅读</p>
    </router-link>
    <router-link to="/about" class="link">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-my"></use>
      </svg>
      <p class="descript">关于我</p>
    </router-link>
  </aside>
</template>

<script>
  export default {

  }
</script>

<style type="text/scss" lang="scss" scoped>
  /*记得引入全局变量的文件*/
  @import '../../assets/style/variable';
  .side-nav {
    float: left;
    @include flex($flow: column wrap);
    font-size: 1.6rem;
    height: calc(100% - 3em);
    width: 3em;
    background: $word;
  }

  .link {
    @include flex($flow: column wrap);
    margin-bottom: 3em;
    width: 100%;
    .icon {
      fill: $special;
      width: 1.5em;
      height: 1.5em;
    }
    .descript {
      color: $special;
      font-size: 1rem;
      margin: 0px;
      line-height:30px;
    }
    &:hover {
      border-left: 2px solid $base;
    }
    &:hover > .icon {
      fill: $base;
    }
    &:hover > .descript {
      color: $base;
    }
  }
  .router-link-active {
    border-left: 2px solid $base;
    .icon {
      fill: $base;
    }
    .descript {
      color: $base;
    }
  }
</style>
