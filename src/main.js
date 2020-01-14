// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import 'styles/reset.css'
import 'styles/border.css'
import 'lib-flexible/flexible.js'

Vue.use(ElementUI)
Vue.use(vueResource)
Vue.config.productionTip = false
// vue-resource发送post请求，要在这里进行配置，否则后台接收不到参数
// Vue.http.options.emulateJSON = true
// Vue.http.headers.post['Content-Type'] = 'application/json'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
