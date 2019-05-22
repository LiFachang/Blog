// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {get, post} from "./request/http"
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'
import './assets/common.css'
import myComponents from './components/index'


Object.keys(myComponents).map((key) => {
  Vue.component(key, myComponents[key])
})

// axios.defaults.baseURL = host.host
// console.log(host.host)

Vue.prototype.$get = get
Vue.prototype.$post = post

Vue.config.productionTip = false

/* eslint-disable no-new */
const _this = new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})

export default _this
