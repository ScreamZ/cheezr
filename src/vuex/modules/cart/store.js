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
  ADD_PRODUCT_TO_CART (state, payload) {
    if (!state.cartContent[payload.id]) {
      Vue.set(state.cartContent, payload.id, payload.qty)
    } else {
      state.cartContent[payload.id] += payload.qty
    }
  },
  REMOVE_PRODUCT_FROM_CART (state, payload) {
    if (state.cartContent[payload.id] > 0) {
      Vue.delete(state.cartContent, payload.id)
    } else {
      state.cartContent[payload.id] -= payload.qty
    }
  },
  UPDATE_PRODUCT_IN_CART (state, payload) {
    if (!state.cartContent[payload.id]) {
      Vue.set(state.cartContent, payload.id, payload.qty)
    } else {
      state.cartContent[payload.id] = payload.qty
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
