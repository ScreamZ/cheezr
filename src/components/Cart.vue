<template>
  <h1>Ton panier plein de came</h1>
  <md-collection v-for="productQty in cartList">
    <product-item
      :title="productList[$key].title"
      :product-id="$key"
      :qty="productQty"
      :image="productList[$key].image"
    ></product-item>
  </md-collection>
  <md-button v-link="{ name: 'products' }" class="waves-light">
    <md-icon left>fast_rewind</md-icon>Back to products
  </md-button>
  <md-button class="waves-light right">
    <md-icon left>credit_card</md-icon>Check-out
  </md-button>
</template>

<script>
import ProductItem from './ProductInCartItem'
import CartStore from '../stores/cart'
import ProductStore from '../stores/products'

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      cartList: CartStore.state.content,
      productList: ProductStore.state.products
    }
  }
}
</script>

<style>

</style>
