<template>
  <product-item
    :title="product.title"
    :product-id="$route.params.id"
    :supporting-text="product.description"
    :image="product.image"
  ></product-item>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  props: ['title', 'supportingText', 'image'],
  components: {
    ProductItem
  },
  computed: {
    product() {
      return this.productList[this.$route.params.id]
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
