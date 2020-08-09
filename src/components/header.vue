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
      <el-menu-item index="3" disabled>LIUYUAY</el-menu-item>
      <el-menu-item index="/Card">MyCard</el-menu-item>
      <el-menu-item index="/Blog">Blog</el-menu-item>
      <el-menu-item index="/Home">Home</el-menu-item>
      <el-menu-item @click="registerDialogForm = true">注册</el-menu-item>
      <el-menu-item @click="loginDialogForm = true">登录</el-menu-item>
    </el-menu>
    <el-dialog
      title="登录"
      :visible.sync="loginDialogForm"
      width="26%">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="pass">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="loginDialogForm = false">取 消</el-button>
        <el-button type="primary" @click="loginDialogForm = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="注册"
      :visible.sync="registerDialogForm"
      width="26%">
      <el-form :model="regForm">
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="regForm.mobile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" :label-width="formLabelWidth">
          <el-input v-model="regForm.code" style="width: 100%;" autocomplete="off"></el-input>
          <el-button type="primary" size="medium" round="true" plain>获取验证码</el-button>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="regForm.showname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="pass">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="registerDialogForm = false">取 消</el-button>
        <el-button type="primary" @click="registerDialogForm = false">确 定</el-button>
      </div>
    </el-dialog>
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
      activeIndex: '1',
      loginDialogForm: false,
      registerDialogForm: false,
      form: {
        username: '',
        password: ''
      },
      regForm: {
        mobile: '',
        code: '',
        showname: ''
      },
      formLabelWidth: '120px'
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
