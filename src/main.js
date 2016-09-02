import Vue from 'vue'
import VueRx from 'vue-rx'
import jQuery from 'jquery'
import App from './App'
import store from './vuex/store'
import router from './services/router'

import 'font-awesome/css/font-awesome.css'
import 'materialize-css/dist/css/materialize.css'

import { loadModel } from '../falcor/play-with-falcor'

window.jQuery = window.$ = jQuery
require('materialize-css/dist/js/materialize')

Vue.use(VueRx)

router.start({
  store,
  components: { App }
  },
  'body'
)

var log = console.log.bind(console);
window.jlog = function(x) { console.log(JSON.stringify(x, null, 3)); };
window.jerror = function(x) { console.error(JSON.stringify(x, null, 3)); };
