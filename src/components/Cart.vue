<template>
  <h1>Ton panier plein de came</h1>
  <div class="collection">
    <product-item v-for="productQty in cartList"
      :title="productList[$key].title"
      :product-id="$key"
      :qty="productQty"
      :image="productList[$key].image"
    ></product-item>
  </div>
  <md-button v-link="{ name: 'products' }" class="waves-light">
    <md-icon left>fast_rewind</md-icon>Back to products
  </md-button>
  <md-button class="waves-light right">
    <md-icon left>credit_card</md-icon>Check-out
  </md-button>
</template>

<script>
import ProductItem from './ProductInCartItem'

export default {
  components: {
    ProductItem
  },
  vuex: {
    getters: {
      cartList: (state) => {
        return state.cartContent
      },
      productList: (state) => {
        return state.products
      }
    }
  }
}
</script>

<style>

</style>
