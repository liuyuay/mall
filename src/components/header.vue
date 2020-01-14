<template>
  <div class="myHeader">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      router
      mode="horizontal"
      @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-submenu index="2-1">
          <template slot="title">时间选择</template>
          <el-menu-item v-for="(item,i) in timeList" :key="i" :index="item.name">
            {{ item.navItem }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="/Card">MyCard</el-menu-item>
      <el-menu-item index="/Blog">Blog</el-menu-item>
      <el-menu-item index="/Home">Home</el-menu-item>
      <el-menu-item index="/login">Login</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
      navList: [
        {name: '/personalCenter', navItem: '弹窗是否删除'},
        {name: '/table', navItem: '表格'},
        {name: '/one', navItem: '一言'},
        {name: '/Picture', navItem: '图片'},
        {name: '/Calendar', navItem: '日历'},
        {name: '/Form', navItem: '表单'}
      ],
      timeList: [
        {name: '/findProject', navItem: '时间选择器'},
        {name: '/communityActivity', navItem: '带快捷选项'},
        {name: '/publishProject', navItem: '时间选择不带禁用效果'}
      ],
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  watch: {
    // 实现路由跳转
    currentId: function (val, oldVal) {
      this.$router.push('/' + val)
    }
  }
}
</script>

<style scoped>

</style>
