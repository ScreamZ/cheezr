<template>
  <div v-if="product">
    <product-item
      :title="product.title"
      :product-id="$route.params.id"
      :supporting-text="product.description"
      :image="product.imageUrl"
    ></product-item>
  </div>
</template>

<script>
import ProductItem from './ProductItem'
import falcorModel from '../services/falcor'
import rxMixin from '../mixins/rx-mixin'

export default {
  name: 'ProductDetails',
  components: {
    ProductItem
  },
  computed: {
    product() {
      if (this.productModel) {
        return this.productModel.json.productsById[this.$route.params.id]
      }
      return {}
    }
  },
  data() {
    return {
      productModel: falcorModel.get([
        'productsById',
        this.$route.params.id,
        ["description", "title", "imageUrl"]
      ])
    }
  },
  mixins: [
    rxMixin
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
