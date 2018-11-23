<template>
  <div style="height:100%">
    <head-nav></head-nav>
    <Aside></Aside>
    <div class="">
      <!--about内容-->
    </div>
  </div>
</template>

<script>
  import Aside from '@/components/common/Aside'
  import HeadNav from '@/components/common/HeadNav'
  export default {
    name: "About",
    components:{
      Aside,
      HeadNav
    },
  }
</script>

<style scoped>

</style>
