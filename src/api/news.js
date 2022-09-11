import request from '@/utils/request'
/**
 *
 * @param {String|Number} id 频道的id
 * @param {Number} timestamp 请求新的数据的当前时间
 * @returns Promise
 */
export const getArticles = (id, timestamp) => {
  return request({
    url: '/v1_0/articles',
    params: {
      channel_id: id,
      timestamp
    }
  })
}
