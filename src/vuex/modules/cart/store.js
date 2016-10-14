import Vue from 'vue'
import * as actions from './actions'

const state = {
  cartId: null,
  cartContent: {},
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

const getters = {
  totalItemsInCart: state => {
    return Object.keys(state.cartContent).reduce((previous, key) => {
      return previous + state.cartContent[key]
    }, 0)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
