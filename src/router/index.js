import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login/login'
import home from '@/pages/home/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
