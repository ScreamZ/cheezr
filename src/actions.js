export const addProductToCart = function ({store, dispatch}, id) {
  dispatch('UPDATE_PRODUCT_IN_CART', id, 1)
}

export const removeProductFromCart = function ({store, dispatch}, id) {
  dispatch('UPDATE_PRODUCT_IN_CART', id, -1)
}

export const updateProductInCart = function ({store, dispatch}, id, qty) {
  dispatch('UPDATE_PRODUCT_IN_CART', id, qty)
}