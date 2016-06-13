import uuid from "node-uuid"
const ID = 'cart_id'

export default {
  state: {
    id: null,
    content: {},
    userId: null,
    deliveryId: null,
    shipped: false,
    paymentId: null
  },

  init() {
    if (!localStorage.getItem(ID)) {
      this.state.id = uuid.v4()
      localStorage.setIdem(ID, this.state.id);
    } else {
      this.state.id = localStorage.getItem(ID)
    }
  }

  addProduct(id, qty) {
    if(!this.state.content[id]) {
      this.state.content[id] = qty
    } else {
      this.state.content[id] += qty
    }
  }

  setUser(id) {
    this.state.userId = id
  }

  setDeliveryId(id) {
    this.state.deliveryId = id
  }

  setPaymentId(id) {
    this.state.paymentId = id
  }
}
