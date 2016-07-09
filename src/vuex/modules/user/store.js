const state = {
  userId: null,
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  address: null
}

const mutations = {
  SET_USER_ID (state, id) {
    state.userId = id
  }
}

export default {
  state,
  mutations
}
