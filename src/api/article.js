import request from '@/utils/request'
// 获取文章列表
export const getArticles = params => {
  return request({
    method: 'get',
    url: '/v1_0/articles',
    params
  })
}
