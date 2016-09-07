<template>
    <div v-if="productList" class="row">
      <div class="col s12 m4" v-for="product in productList">
        <product-item
          :title="product.title"
          :product-id="$key"
          :supporting-text="product.description"
          :image="product.imageUrl"
          :price="product.price"
        ></product-item>
      </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem'
import { productList } from '../vuex/modules/products/getters'
import falcorModel from '../services/falcor'
import rxMixin from '../mixins/rx-mixin'

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  computed: {
    productList() {
      if (this.productListModel) {
        return this.productListModel.json.productsById
      }
      return []
    }
  },
  data() {
    return {
      productListModel: falcorModel.get(
        'productsById["parmigiano", "prosciutto", "aceto"]["description", "title", "imageUrl"]'
      )
    }
  },
  mixins: [
    rxMixin
  ]
}
</script>

<style>

</style>
