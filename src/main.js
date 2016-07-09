import Vue from 'vue'
import VueMaterialComponents from 'vue-material-components'
import App from './App'
import store from './vuex/store'
import router from './services/router'

import 'materialize-css/dist/css/materialize.css'
import 'vue-material-components/dist/vue-material-components.css'

Vue.use(VueMaterialComponents)

router.start({
  store,
  components: { App }
  },
  'body'
)
