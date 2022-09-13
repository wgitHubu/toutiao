import request from '@/utils/request'
/**
 *
 *获取用户自己的频道
 * @returns Promise
 */
export const getChannelAPI = () => {
  return request({
    url: '/v1_0/user/channels'
    // headers: {
    //   Authorization: `Bearer ${store.state.tokenObj.token} `
    // }
  })
}

/**
 * 获取所有频道
 * @returns Promise
 */
export const getAllChannelsAPI = () => {
  return request({
    url: '/v1_0/channels'
  })
}
