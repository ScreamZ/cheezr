// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './services/router'
import store from './vuex/store'
import jQuery from 'jquery'
import 'font-awesome/css/font-awesome.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'materialize-css/dist/css/materialize.css'

window.jQuery = window.$ = jQuery
// require('materialize-css/dist/js/materialize')

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
