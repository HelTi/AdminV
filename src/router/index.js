import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login/login'
import home from '@/pages/home/home'
import test from '@/pages/element/test'
import url from '@/pages/url/url'
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
    },
    {
      path:'/test',
      name:'test',
      component:test
    },
    {
      path:'/url',
      name:'url',
      component:url
    }
  ]
})
