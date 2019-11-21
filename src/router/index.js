import Vue from 'vue'
import Router from 'vue-router'
import one from '@/components/One.vue'
import Picture from '@/components/image.vue'
import main from '@/components/main.vue'
import Blog from '@/components/blog.vue'
import test from '@/view/test.vue'
import title1 from '@/view/title1.vue'
import title2 from '@/view/title2.vue'
import Goods from '@/view/goods'

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
  }, {
    path: '/test/:testId/name/:username',
    name: 'test',
    component: test
  }, {
    path: '/test',
    name: 'test',
    component: test,
    children: [{
      path: 'title1',
      name: 'title1',
      component: title1
    },
    {
      path: 'title2',
      name: 'title2',
      component: title2
    }]
  }, {
    path: '/goods',
    name: 'goods',
    component: Goods
  }]
})
