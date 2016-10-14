import Vue from 'vue'
import * as actions from './actions'

const state = {
  // 'parmigiano': {
  //   title: 'Parmigiano 30 mesi',
  //   description: 'Il miglior formaggio del mondo',
  //   image: 'formaggio.jpg'
  // },
  // 'prosciutto': {
  //   title: 'Prosciutto di Parma',
  //   description: 'Il miglior formaggio del mondo',
  //   image: 'prosciutto.jpg'
  // },
  // 'aceto': {
  //   title: 'Aceto balsamico di Modena',
  //   description: 'Il miglior formaggio del mondo',
  //   image: 'aceto.jpg'
  // }
}

const mutations = {
  ADD_PRODUCT_TO_LIST (state, payload) {
    Vue.set(state, payload.id, payload.content)
  }
}

const getters = {
  productList: state => {
    return state
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
