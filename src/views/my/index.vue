<template>
<div class="my-container">

  <div v-if="user" class="header user-info">
    <div class="base-info">
      <div class="left">
        <van-image
          class="avatar"
          round
          fit="cover"
          :src="userInfo.photo"
        />
        <span class="name">{{ userInfo.name }}</span>
      </div>
      <div class="right">
        <van-button size="mini" round>编辑资料</van-button>
      </div>
    </div>
    <div class="data-states">
      <div class="data-item">
        <span class="count">{{ userInfo.art_count }}</span>
        <span class="text">头条</span>
      </div>
      <div class="data-item">
        <span class="count">{{ userInfo.follow_count }}</span>
        <span class="text">关注</span>
      </div>
      <div class="data-item">
        <span class="count">{{ fans_count }}</span>
        <span class="text">粉丝</span>
      </div>
      <div class="data-item">
        <span class="count">{{ userInfo.like_count }}</span>
        <span class="text">获赞</span>
      </div>
    </div>
    <div class="base-info">

    </div>
  </div>
  <div v-else class="header not-login" >
    <div class="login-btn" @click="$router.push('/login')">
      <img class="mobile-img" src="@/assets/mobile.png" alt="">
      <span class="text">登陆 / 注册</span>
    </div>
  </div>
  <van-grid :column-num="2" class="grid-nav" clickable>
    <van-grid-item class="grid-item1" icon="star-o" text="收藏" />
    <van-grid-item class="grid-item2" icon="clock-o" text="历史" />
  </van-grid>
  <van-cell title="消息通知" is-link/>
  <van-cell v-if="user"
            class="login-out"
            title="退出登陆"
            is-link to="index"
            @click="logout"
            clickable
  />

</div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'

export default {
  name: 'MyIndex',
  data () {
    return {
      userInfo: {} // 当前用户信息
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created () {
    if (this.user) {
      this.loadUserInfo()
    }
  },
  methods: {
    logout () {
      this.$dialog.confim({
        title: '确认退出吗？'
      }).then(() => {
        this.$store.commit('setUser', null)
      }).catch(() => {
      })
    },
    async loadUserInfo () {
      try {
        const { data } = await getUserInfo()
        this.userInfo = data.data
      } catch (err) {
        this.$toast('获取数据失败，请稍后')
      }
    }
  }
}
</script>

<style scoped lang="less">
  .my-container {
    .header {
      height: 361px;
      background: url("@/assets/banner.png");
      background-size: cover;
    }
  }
  .not-login {
    display: flex;
    // 水平居中
    justify-content: center;
    // 垂直居中
    align-items: center;
    .login-btn {
      display: flex;
      // 设置为垂直
      flex-direction: column;
      // 水平居中
      justify-content: center;
      // 垂直居中
      align-items: center;
      .mobile-img {
        height: 132px;
        width: 132px;
        // 相隔大小
        margin-bottom: 15px;
      }
      .text {
        font-size: 28px;
        color: #ffffff;
      }
    }
  }
  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      // 往两边撑开
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          margin-right: 33px;
          border: 3px solid #fff;
        }
        .name {
          size: 30px;
          color: #ededed;
        }
      }
    }
    .data-states {
      display: flex;
      .data-item {
        height: 130px;
        flex: 1;
        // 设置为垂直分布
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        .count {
          font-size: 36px;
        }
        .text {
          font-size: 23px;
        }
      }
    }
  }
  .grid-nav {
    .grid-item1 {
      color: #eb5253;
    }
    .grid-item2 {
      color: #ff9d1d;
    }
  }
  .login-out {}
</style>
