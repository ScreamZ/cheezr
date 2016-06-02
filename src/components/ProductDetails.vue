<template>
  <product-item
    :title="product.title"
    :product-id="$key"
    :supporting-text="product.description"
    :image="product.image"
  ></product-item>
</template>

<script>
import ProductStore from '../stores/products'
import ProductItem from './ProductItem'

export default {
  props: ['title', 'supportingText', 'image'],
  components: {
    ProductItem
  },
  data() {
    return {
      product: ProductStore.state.products[this.$route.params.id]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
