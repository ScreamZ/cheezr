import kuzzle from '../../../services/kuzzle'
import * as localStorage from 'services/localStorage'

const LOCAL_CART_ID = 'cart'
const CARTS_COLLECTION = 'carts'
const extractCart = (state) => {
  return {
    content: state.cartContent,
    deliveryId: state.deliveryId,
    shipped: state.shipped,
    paymentId: state.paymentId
  }
}

function syncCartWithServer (state, rollbackCb) {
  kuzzle
    .dataCollectionFactory(CARTS_COLLECTION)
    .replaceDocument(state.cartId, extractCart(state), (err, res) => {
      if (err) {
        console.error(err)
        // TODO show error in the UI
        if (rollbackCb) {
          rollbackCb()
        }
      }
    })
}

export const initCart = (store) => {
  return new Promise((resolve, reject) => {
    let cartId = localStorage.loadItem(LOCAL_CART_ID)
    if (cartId) {
      console.log(`Found previously saved cart with id ${cartId}`)
      kuzzle
        .dataCollectionFactory(CARTS_COLLECTION)
        .fetchDocumentPromise(cartId)
        .then(document => {
          store.commit('SET_CART_ID', document.id)
          store.commit('SET_CART_CONTENT', document.content.content)
          resolve()
        })
        .catch(error => {
          console.error(`unable to fetch cart ${cartId} from server`)
          console.error(error.message)
          return initCartFromServer(store)
        })
    } else {
      return initCartFromServer(store)
    }
  })
}

export const initCartFromServer = (store) => {
  console.log('asking new cart to server...')
  return new Promise((resolve, reject) => {
    kuzzle
      .dataCollectionFactory(CARTS_COLLECTION)
      .createDocumentPromise(extractCart(store.state))
      .then(document => {
        store.commit('SET_CART_ID', document.id)
        localStorage.saveItem(LOCAL_CART_ID, document.id)
        resolve()
      })
      .catch(error => {
        console.error(error.message)
        reject()
      })
  })
}

export const addProductToCart = function (store, id) {
  store.commit('ADD_PRODUCT_TO_CART', {id, qty: 1})

  syncCartWithServer(store.state, () => {
    store.commit('REMOVE_PRODUCT_FROM_CART', {id, qty: 1})
  })
}

export const removeProductFromCart = function (store, id) {
  store.commit('REMOVE_PRODUCT_FROM_CART', {id, qty: 1})

  syncCartWithServer(store.state, () => {
    store.commit('ADD_PRODUCT_TO_CART', {id, qty: 1})
  })
}

export const updateProductInCart = function (store, id, qty) {
  let oldQty = store.state[id]

  store.commit('UPDATE_PRODUCT_IN_CART', {id, qty})

  syncCartWithServer(store.state, () => {
    store.commit('UPDATE_PRODUCT_IN_CART', {id, qty: oldQty})
  })
}
