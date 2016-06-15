import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  products: {
    'parmigiano': {
      title: 'Parmigiano 30 mesi',
      description: 'Il miglior formaggio del mondo',
      image: 'http://www.springbankcheesecrowfoot.com/wordpress/wp-content/uploads/2012/12/Parmigiano-Reggiano.jpg'
    },
    'prosciutto': {
      title: 'Prosciutto di Parma',
      description: 'Il miglior formaggio del mondo',
      image: 'http://storage.aicod.it/portale/academiabarilla/view/1200/prosciuttodiparmaDOP-34.JPG'
    },
    'aceto': {
      title: 'Aceto balsamico di Modena',
      description: 'Il miglior formaggio del mondo',
      image: 'http://www.visitmodena.it/it/immagini/balsamico.jpg'
    }
  },
  cartId: null,
  cartContent: {},
  userId: null,
  deliveryId: null,
  shipped: false,
  paymentId: null
}

const mutations = {
  ADD_PRODUCT_TO_CART (state, id, qty) {
    if (!state.cartContent[id]) {
      Vue.set(state.cartContent, id, qty)
    } else {
      state.cartContent[id] += qty
    }
  },
  REMOVE_PRODUCT_FROM_CART (state, id, qty) {
    if (state.cartContent[id] > 0) {
      Vue.delete(state.cartContent, id)
    } else {
      state.cartContent[id] -= qty
    }
  },
  UPDATE_PRODUCT_IN_CART (state, id, qty) {
    if (!state.cartContent[id]) {
      Vue.set(state.cartContent, id, qty)
    } else {
      state.cartContent[id] = qty
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})
