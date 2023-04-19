<template>
<div class="login-container">
<!-- 导航栏-->
  <van-nav-bar class="page-nav-bar" title="登陆"/>
<!--登陆的表单-->
  <van-form ref = "loginForm" @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules = "userForRules.mobile"
        type="number"
        maxlength="12">
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        :rules = "userForRules.code">
      >
        <template #button>
          <!--
              time： 倒计时的时间
           -->
          <van-count-down  v-if = "isCountDownShow"
                           :time = "1000 * 5"
                           format="ss s"
                           @finish = "isCountDownShow = false"
          />
          <van-button
                      v-else
                      round class="send-msg-bun"
                      native-type="button"
                      size="small"
                      type="default"
                      @click = "onSendSms"
          >发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="login-btn-wrap">
      <van-button class="login-btn" round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

  <!--登陆的表单-->
</div>
</template>

<script>
import { login, sendSms } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      userForRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3|5|7|8]\d{9}$/,
          message: '手机号格式错误'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式错误'
        }]
      },
      isCountDownShow: false // 是否展示倒计时
    }
  },
  methods: {
    async onSubmit () {
      // 1、 获取表单数据
      const user = this.user
      // 2、 表单验证
      // 在组件中必须使用this.$toast来调用toast组件
      this.$toast.loading({
        message: '登陆中',
        forbidClick: true, // 禁用背景点击
        duration: 0
      })
      // 在组件中必须通过 this.$toast 来调用 Toast 组件
      this.$toast.loading({
        message: '加载中',
        forbidClick: true, // 禁用背景点击
        duration: 0 // 持续时间
      })
      // 3、 提交表单请求登陆
      try {
        const res = await login(user)
        this.$store.commit('setUser', res)
        this.$toast.success('登陆成功')
      } catch (err) {
        if (err.response.status === 400) {
          console.log('手机号或验证码错误')
          this.$toast.fail('登陆失败')
        } else {
          console.log('登陆失败，请稍后重试', err)
          this.$toast.fail('登陆失败，请稍后重试')
        }
        console.log('登陆失败', err)
      }
      // 4、 根据请求响应结果处理后续操作
    },
    async onSendSms () {
    //  1、校验手机号码
      try {
        await this.$refs.loginForm.validate('mobile')
        console.log('校验通过')
      } catch (err) {
        console.log('验证失败', err)
        return
      }
      this.$refs.loginForm.valid('mobile')
      //  2、验证通过，显示倒计时
      this.isCountDownShow = true
      //  3、请求发送验证码
      try {
        await sendSms(this.user.mobile)
      } catch (err) {
        // 发送失败，关闭倒计时
        this.isCountDownShow = false
        if (err.response.status === 429) {
          this.$toast('发送太频繁了，请稍后重试')
        } else {
          this.$toast('发送失败，请稍后重试')
        }
        console.log(err)
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .iconfont {
    font-size: 37px;
  }
  .send-msg-bun {
    background-color: #ededed;
    width: 160px;
    height: 46px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4f2;
      border: none;
    }
  }
}
</style>
