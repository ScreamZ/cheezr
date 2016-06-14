<template>
    <div class="row">
      <div class="col s12 m4" v-for="product in productList">
        <product-item
          :title="product.title"
          :product-id="$key"
          :supporting-text="product.description"
          :image="product.image"
        ></product-item>
      </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  components: {
    ProductItem,
  },
  vuex: {
    getters: {
      productList: (state) => {
        return state.products
      }
    }
  }
}
</script>

<style>

</style>
