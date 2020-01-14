<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      form: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  // http: {
  //   root: '/',
  //   headers: {
  //     'Content-Type' : 'application/json'
  //   }
  // },
  methods: {
    onSubmit: function () {
      // this.$http.post('http://localhost:8082/getUserName',
      //   {
      //     userCode: 1
      //   },
      //   {
      //     // 加上这个属性才可以发送post请求，否则后台接收不到参数，或者在main.js中进行配置
      //     emulateJSON: true
      //   }
      // ).then(function (res) {
      //   console.log(res)
      // }).catch(function () {
      //   console.log('失败')
      // })
      // let param = new URLSearchParams()
      // param.append('userCode', 1)
      // axios.post('http://localhost:8082/getUserName', param).then(res => {
      //   console.log(res)
      // }).catch(function () {
      //   console.log('失败')
      // })
      // this.$http.jsonp('http://localhost:8082/getUserName', {
      //   params: {
      //     userCode: 1
      //   }
      // }).then(function (res) {
      //   console.log(res)
      // })
      //  方法一（get方法）
      // axios.get('http://localhost:8082/getUserName',
      //   {
      //     params: {
      //       userCode: 1
      //     }
      //   }).then(res => {
      //   console.log(res)
      // }).catch(function () {
      //   console.log('失败')
      // })
      //  方法二（get方法）参数必须要放在params里面
      // this.$http.get('http://localhost:8082/getUserName',
      //   {params: {
      //     userCode: 1
      //   }}
      // ).then(function (res) {
      //   console.log(res)
      // }).catch(function () {
      //   console.log('失败')
      // })
      // 方法三（post请求）
      // this.$http.post({
      //   url: 'http://localhost:8082/login',
      //   data: {
      //     username: this.form.username,
      //     password: this.form.password
      //   },
      //   emulateJSON: true
      // }).then(function (res) {
      //   console.log(res)
      // }).catch(function () {
      //   console.log('失败')
      // })
      // this.$http.post(
      //   'http://localhost:8082/login',
      //   // 请求体重发送数据给服务端
      //   {
      //     username: this.form.username,
      //     password: this.form.password
      //   },
      //   {
      //     'headers': {
      //       'Content-Type': 'json'
      //     }
      //   }).then(function (res) {
      //   // 成功回调
      //   console.log(res)
      // }, function () {
      //   // 失败回调
      //   console.log('失败')
      // })
      this.$http.post('http://localhost:8082/login',
        {
          username: this.form.username,
          password: this.form.password
        },
        {
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        {
          // 加上这个属性才可以发送post请求，否则后台接收不到参数，或者在main.js中进行配置
          emulateJSON: false
        }
      ).then(function (res) {
        if (res.status === 200) {
          console.log(res.data.data)
          console.log(res.status)
          this.$store.commit('$_setToken', res.data.data)
        }
        console.log(res.status)
      }).catch(function () {
        console.log('失败')
      })
      // 方法四(post请求)
      // let param = new URLSearchParams()
      // param.append('userCode', 1)
      // axios.post('http://localhost:8082/getUserName', param).then(res => {
      //   console.log(res)
      // }).catch(function () {
      //   console.log('失败')
      // })
      // this.$http({
      //   url: 'http://localhost:8082/login',
      //   method: 'POST',
      //   // 请求体重发送的数据
      //   data: {
      //     username: this.form.username,
      //     password: this.form.password
      //   },
      //   // emulateJSON: true,
      //   // 设置请求头
      //   headers: {
      //     'Content-Type': 'x-www-from-urlencoded'
      //   }
      // }).then(function () {
      //   // 请求成功回调
      // }, function () {
      //   // 请求失败回调
      // })
    }
  }
}
</script>

<style scoped>

</style>
