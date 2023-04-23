<template>
<div class="home-container">
  <van-nav-bar class="page-nav-bar" title="搜索框">
    <template #title>
      <van-button round
                  type="info"
                  icon="search"
                  size="small"
                  class="search-btn"
      >搜索</van-button>
    </template>
  </van-nav-bar>
<!--频道列表-->
  <van-tabs class="channel-tabs" v-model="active" animated swipeable>
    <van-tab title="公告">内容 1</van-tab>
    <van-tab title="寻物启示">内容 2</van-tab>
    <van-tab title="失物招领">内容 3</van-tab>
    <van-tab title="考研互助">内容 4</van-tab>
    <van-tab title="海底捞">内容 5</van-tab>
    <template v-slot:nav-right>
      <div class="placeholder">
      </div>
      <div class="hamburger-btn">
        <van-icon name="apps-o"/>
      </div>
    </template>
  </van-tabs>
</div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  .van-nav-bar__title {
    max-width: unset;
  }
  .search-btn {
    background-color: #5babfb;
    width: 450px;
    height: 64px;
    border: none;
    .van-icon {
      font-size: 32px;
    }
  }
  /deep/.channel-tabs {
    .van-tabs__wrap {
      height: 82px;
    }
    .van-tab {
      border-right: 1px solid #edeff3;
      min-width: 200px;
      color: #777777;
    }
    .van-tab--active {
      color: #333333
    }
    .van-tabs__nav {
      padding-bottom: 3px;
    }
    .van-tabs__line {
      bottom: 8px;
      width: 31px !important;
      height: 6px;
      background-color: #3296fa;
    }
    .placeholder {
      // 默认是1，会参与计算
      flex-shrink: 0;
      width: 66px;
      height: 82px;
    }
    .hamburger-btn {
      position: fixed;
      right: 0;
      width: 66px;
      height: 82px;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      opacity: 1;
      font-size: 50px;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 1px;
        height: 100%;
        background-image: url("@/assets/gradient-gray-line.png");
        background-size: contain;
      }
    }
  }
}
</style>
