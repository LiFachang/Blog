// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {get, post, uploadimg} from "./request/http"
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'
import './assets/common.css'
import myComponents from './components/index'


Object.keys(myComponents).map((key) => {
  Vue.component(key, myComponents[key])
})


Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$uploadimg = uploadimg;

Vue.filter('parseTime', (str) => {
  let time = new Date(Number(str + '000'))
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let day = time.getDate()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()
  let now = new Date()
  let nowYear = now.getFullYear()
  let nowMonth = now.getMonth() + 1
  let nowDay = now.getDate()
  if (year === nowYear && month === nowMonth && day === nowDay) {
    hours = hours > 10 ? hours : '0' + hours
    minutes = minutes > 10 ? minutes : '0' + minutes
    seconds = seconds > 10 ? seconds : '0' + seconds
    return `${hours}:${minutes}:${seconds}`
  } else {
    return `${year}年${month}月${day}日`
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
const _this = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

export default _this
