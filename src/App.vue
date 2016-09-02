<template>
  <div class="container">
    <Navbar :total="totalItemsInCart"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import { totalItemsInCart } from './vuex/modules/cart/getters'
import falcorModel from './services/falcor'

export default {
  name: 'App',
  components: {
    Navbar
  },
  replace: false,
  vuex: {
    getters: {
      totalItemsInCart
    }
  },
  data() {
    return {
      productsById: falcorModel.get('productsById[0..2]["description", "title", "imageUrl"]')
    }
  }
}
</script>

<style></style>
