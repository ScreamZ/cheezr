import kuzzle from '../../../services/kuzzle'

const CART_ID = 'dummy_cart'
const CARTS_COLLECTION = 'carts'

function syncCartWithServer (id, content, rollbackCb) {
  kuzzle
    .dataCollectionFactory(CARTS_COLLECTION)
    .replaceDocument(id, {
      content: content
    }, (err, res) => {
      if (err) {
        console.error(err)
        // TODO show error in the UI
        if (rollbackCb) {
          rollbackCb()
        }
      }
    })
}

export const addProductToCart = function (store, id) {
  store.commit('ADD_PRODUCT_TO_CART', {id, qty: 1})

  syncCartWithServer(CART_ID, store.state.cartContent, () => {
    store.commit('REMOVE_PRODUCT_FROM_CART', {id, qty: 1})
  })
}

export const removeProductFromCart = function (store, id) {
  store.commit('REMOVE_PRODUCT_FROM_CART', {id, qty: 1})

  syncCartWithServer(CART_ID, store.state.cartContent, () => {
    store.commit('ADD_PRODUCT_TO_CART', {id, qty: 1})
  })
}

export const updateProductInCart = function (store, id, qty) {
  let oldQty = store.state.cartContent[id]

  store.commit('UPDATE_PRODUCT_IN_CART', {id, qty})

  syncCartWithServer(CART_ID, store.state.cartContent, () => {
    store.commit('UPDATE_PRODUCT_IN_CART', {id, qty: oldQty})
  })
}
