import request from '@/utils/request'
import store from '@/store'
export const login = data => {
  return request({
    method: 'post',
    url: '/app/v1_0/authorizations',
    data
  })
}
// 发送验证码
export const sendSms = mobile => {
  return request({
    method: 'Get',
    url: '/app/v1_0/sms/codes/' + mobile
  })
}
// 获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'get',
    url: '/app/v1_0/user',
    headers: {
      Authorization: 'Bearer' + store.state.user.token
    }
  })
}
