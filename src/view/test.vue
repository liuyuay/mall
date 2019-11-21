<template>
  <div class="test">
    <!--动态路由start-->
    this author QQ : {{$route.params.testId}}
    <br/>
    <!--输入这个地址查看动态路由效果http://localhost:8081/#/test/30967086/name/liuyuay-->
    this author name : {{$route.params.username}}
    <!--动态路由end-->
    <!--嵌套路由start-->
    <router-link to="/test/title1">标题1</router-link>
    <router-link to="/test/title2">标题2</router-link>
    <!--路由出口-->
    <router-view></router-view>
    <!--嵌套路由end-->
    <!--编程式路由start-->
    <div @click="gotoGoods">跳转到商品详情页面</div>
    <!--编程式路由end-->
    <!--编程式路由携带参数start-->
    <div @click="gotoGoodsByParams">跳转到商品详情页面(带参数)</div>
    <!--编程式路由携带参数end-->
    <!--编程式路由携带参数start-->
    <router-link v-bind:to="{name: 'goods',params: { goodsId: '30967086'}}">使用命名路由跳转</router-link>
    <!--编程式路由携带参数end-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello vue'
    }
  },
  methods: {
    gotoGoods: function () {
      this.$router.push('/goods')
    },
    gotoGoodsByParams: function () {
      // 类似于history.go()的方法，括号里面填个1就是前进一级页面，-1就后退一级页面
      // 这两种方式都可以
      this.$router.push({
        path: '/goods?goodsId=30967086'
      })
      // this.$router.push({
      //   path: '/goods',
      //   query: {
      //     goodsId: '30967086'
      //   }
      // })
    }
  }
}
</script>

<style scoped>

</style>
