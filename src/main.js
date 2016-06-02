import Vue from 'vue'
import VueMaterialComponents from 'vue-material-components'
import VueRouter from 'vue-router'
import configRouter from './routes'
import App from './App'

import 'materialize-css/dist/css/materialize.css'
import 'vue-material-components/dist/vue-material-components.css'

Vue.use(VueMaterialComponents)
Vue.use(VueRouter)

export var router = new VueRouter()
configRouter(router)

router.start(App, 'body')
