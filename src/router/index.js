import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const view = name => () => import(`@/view/${name}`)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: view('home')
  },
  {
    path: '/register',
    name: 'register',
    component: view('register')
  },
  {
    path: '/login',
    name: 'login',
    component: view('login')
  },
  {
    path: '*',
    redirect: {name: 'home'}
  }
]
const router =  new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // if (to.name !== 'login' && to.name !== 'register' && !sessionStorage.getItem('token')) {
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})

export default router
