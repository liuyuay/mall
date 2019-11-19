import Vue from 'vue'
import Router from 'vue-router'
import one from '@/components/One.vue'
import Picture from '@/components/image.vue'
import main from '@/components/main.vue'
import Blog from '@/components/blog.vue'

Vue.use(Router)

export default new Router({
  // 定义路由
  routes: [{
    path: '*',
    redirect: '/main'
  }, {
    path: '/one',
    name: 'one',
    component: one
  }, {
    path: '/Picture',
    name: 'Picture',
    component: Picture
  }, {
    path: '/main',
    name: 'main',
    component: main
  }, {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  }]
})
