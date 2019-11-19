<template>
  <div id="app">
    <Header></Header>
    <br/>
    <!--  路由出口  -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header.vue'
export default {
  name: 'App',
  data () {
    return {
      input: ''
    }
  },
  components: {
    Header
  }
}
</script>

<style>
  #app {
    /*background: url(../static/image/a.jpg) 0 /cover fixed;*/
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 953px;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
