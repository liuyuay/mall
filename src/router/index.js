import Vue from 'vue'
import Router from 'vue-router'
import one from '@/components/One'
import Picture from '@/components/image'
import main from '@/components/main'
import Blog from '@/components/blog'
import test from '@/view/test'
import title1 from '@/view/title1'
import title2 from '@/view/title2'
import Goods from '@/view/goods'
import Home from '@/view/home'

Vue.use(Router)

export default new Router({
  // 定义路由
  routes: [{
    path: '*',
    redirect: '/home'
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
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }]
})
