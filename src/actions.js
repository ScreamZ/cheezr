import kuzzle from './services/kuzzle'
const CART_ID = 'dummy_cart'
const CARTS_COLLECTION = 'carts'

export const addProductToCart = function (store, id) {
  store.dispatch('ADD_PRODUCT_TO_CART', id, 1)

  syncCartWithServer(CART_ID, store.state.cartContent, () => {
    store.dispatch('REMOVE_PRODUCT_FROM_CART', id, 1)
  })
}

export const removeProductFromCart = function (store, id) {
  store.dispatch('REMOVE_PRODUCT_FROM_CART', id, 1)

  syncCartWithServer(CART_ID, store.state.cartContent, () => {
    store.dispatch('ADD_PRODUCT_TO_CART', id, 1)
  })
}

export const updateProductInCart = function (store, id, qty) {
  let oldQty = store.state.cartContent[id]

  store.dispatch('UPDATE_PRODUCT_IN_CART', id, qty)

  syncCartWithServer(CART_ID, store.state.cartContent, () => {
    store.dispatch('UPDATE_PRODUCT_IN_CART', id, oldQty)
  })
}

function syncCartWithServer(id, content, rollbackCb) {
  kuzzle
    .dataCollectionFactory(CARTS_COLLECTION)
    .updateDocument(id, {
      content: content
    }, (err, res) => {
      if (err) {
        console.error(err);
        // TODO show error in the UI
        if (rollbackCb) {
          rollbackCb()
        }
      }
    })
}
