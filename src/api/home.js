import request from '@/utils/request.js'

export function getCarousel () {
  return request({
    url: 'http://localhost:8080/blog/api/carousel/get_all',
    method: 'post'
  })
}
