import Vue from 'vue'
import VueMaterialComponents from 'vue-material-components'
import App from './App'
import store from './vuex/store'
import router from './services/router'
import falcor from 'falcor/dist/falcor.browser'

import 'materialize-css/dist/css/materialize.css'
import 'vue-material-components/dist/vue-material-components.css'

Vue.use(VueMaterialComponents)

router.start({
  store,
  components: { App }
  },
  'body'
)

var log = console.log.bind(console);
window.jlog = function(x) { console.log(JSON.stringify(x, null, 3)); };
window.jerror = function(x) { console.error(JSON.stringify(x, null, 3)); };
window.model = new falcor.Model({source: new falcor.HttpDataSource('/model.json') });
