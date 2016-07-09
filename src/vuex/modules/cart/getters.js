export const totalItemsInCart = state => {
  return Object.keys(state.cart.cartContent).reduce((previous, key) => {
    return previous + state.cart.cartContent[key];
  }, 0)
}
