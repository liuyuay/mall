<template>
  <el-container>
<!--    <el-header>-->
<!--    </el-header>-->
    <el-container>
      <el-aside width="300px">Aside</el-aside>
      <el-container>
        <el-main>
          <!-- 面包屑 -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Blog首页</el-breadcrumb-item>
            <el-breadcrumb-item>关于</el-breadcrumb-item>
          </el-breadcrumb>
          <el-divider content-position="right">LiuYu</el-divider>
          <!--放一个card，里面放两张图片-->
          <el-row>
            <el-card :body-style="{ padding: '0px' }" shadow="never">
              <img src="/static/image/showtohead.jpg" class="image" height="300px">
              <div style="padding: 20px;">
                <span>你在看孤独的风景</span>
                <div class="bottom clearfix">
                  <time class="time">{{ value }}</time>
                </div>
              </div>
            </el-card>
          </el-row>
          <!-- 日历 -->
          <el-calendar v-model="value">
          </el-calendar>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
      <el-aside width="300px">Aside</el-aside>
    </el-container>
  </el-container>
</template>

<script>
export default {
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
      activeIndex: '1',
      value: new Date()
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
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
