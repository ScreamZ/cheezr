<template>
  <div class="container">
    <Navbar :total="total" ></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import CartStore from './stores/cart'

export default {
  components: {
    Navbar
  },
  replace: false,
  computed: {
    total: function () {
      return CartStore.getTotalItems()
    }
  }
}
</script>

<style>

</style>
