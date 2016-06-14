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
  cartContent: {
    'parmigiano': 0,
    'prosciutto': 0,
    'aceto': 0
  },
  userId: null,
  deliveryId: null,
  shipped: false,
  paymentId: null
}

const mutations = {
  UPDATE_PRODUCT_IN_CART (state, id, qty) {
    state.cartContent[id] += qty
  }
}

export default new Vuex.Store({
  state,
  mutations
})
