export const addProductToCart = function (id) {
  dispatch('UPDATE_PRODUCT_IN_CART', id, 1)
}

export const removeProductFromCart = function (id) {
  dispatch('UPDATE_PRODUCT_IN_CART', id, -1)
}

export const updateProductInCart = function (id, qty) {
  dispatch('UPDATE_PRODUCT_IN_CART', id, qty)
}
