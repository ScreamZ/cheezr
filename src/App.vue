<template>
  <div class="container">
    <Navbar :total="totalItemsInCarts" ></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  replace: false,
  vuex: {
    getters: {
      totalItemsInCarts: (state) => {
        return Object.keys(state.cartContent).reduce((previous, key) => {
          return previous + state.cartContent[key];
        }, 0)
      }
    }
  }
}
</script>

<style></style>
