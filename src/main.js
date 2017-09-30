// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/normalize.css'
import './assets/css/bootstrap-grid.css'
import './assets/css/font-awesome.css'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
Vue.prototype.$http=axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
