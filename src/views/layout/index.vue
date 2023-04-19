<template>
<div class="layout-container"></div>
  <!--子路由出口-->
  <router-view/>

<!--标签导航栏-->
  <van-tabbar route>
<!--to:实现路由跳转-->
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="question-o" to="/question">问答</van-tabbar-item>
    <van-tabbar-item icon="play-circle-o" to="/video">视频</van-tabbar-item>
    <van-tabbar-item icon="user-circle-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>

</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
