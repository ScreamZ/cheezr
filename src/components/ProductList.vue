<template>
    <div v-if="productList" class="row">
      <div class="col s12 m4" v-for="(product, key) in productList">
        <product-item
          :title="product.title"
          :product-id="key"
          :supporting-text="product.description"
          :image="product.image"
          :price="product.price"
        ></product-item>
      </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem'
import { mapGetters } from 'vuex'

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters([
      'productList'
    ])
  }
}
</script>