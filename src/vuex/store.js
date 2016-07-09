import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user/store'
import cart from './modules/cart/store'
import products from './modules/products/store'
import common from './modules/common/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    user,
    cart,
    common
  },
  strict: process.env.NODE_ENV !== 'production'
})
