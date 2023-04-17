import request from '@/utils/request'

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
    method: 'get',
    // eslint-disable-next-line no-template-curly-in-string
    url: '/app/v1_0/sms/codes/${mobile}'
  })
}
