<template>
  <div class="container">
    <Navbar :total="totalItemsInCart" ></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import { totalItemsInCart } from './vuex/modules/cart/getters'

export default {
  components: {
    Navbar
  },
  replace: false,
  vuex: {
    getters: {
      totalItemsInCart
    }
  }
}
</script>

<style></style>
