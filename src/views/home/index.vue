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
</div>
</template>

<script>
export default {
  name: 'HomeIndex'
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
}
</style>
