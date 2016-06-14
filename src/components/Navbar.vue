<template>
  <md-navbar title="Cheezr" right>
      <md-nav-item v-link="{ name: 'cart' }"><md-icon left>shopping_cart</md-icon><md-badge alert="items">{{total}}</md-badge></md-nav-item>
  </md-navbar>
</template>

<script>
export default {
  props: ['total'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
