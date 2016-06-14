<template>
  <md-navbar title="Cheezr - viens acheter ta came" right>
      <md-nav-item v-link="{ name: 'cart' }"><md-icon left>shopping_cart</md-icon><md-badge alert="items">4</md-badge></md-nav-item>
  </md-navbar>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
