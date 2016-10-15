<template>
  <div>
    <h1>Ton panier plein de came</h1>
    <div class="collection">
      <product-item v-for="(productQty, key) in cartList"
        :title="productList[key].title"
        :product-id="key"
        :qty="productQty"
        :image="productList[key].imageUrl"
      ></product-item>
    </div>
    <router-link :to="{name: 'products'}">
      <md-button
        text="Back to products"
        icon="fast_rewind"
        icon-align="left"
      ></md-button>
    </router-link>
    
    <md-button
      text="Check-out"
      icon="credit_card"
      icon-align="left"
    ></md-button>
  </div>
</template>

<script>
import MdButton from './Materialize/mdButton'
import ProductItem from './ProductInCartItem'
import { mapState } from 'vuex'

export default {
  components: {
    ProductItem,
    MdButton
  },
  computed: {
    ...mapState({
      cartList: state => state.cart.cartContent,
      productList: state => state.products
    })
  }
  // vuex: {
  //   getters: {
  //     cartList: (state) => {
  //       return state.cartContent
  //     },
  //     productList: (state) => {
  //       return state.products
  //     }
  //   }
  // }
}
</script>

<style>

</style>
