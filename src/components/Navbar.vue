<template>
  <nav>
    <div class="nav-wrapper">
      <a class="brand-logo">Cheezr!</a>
      <ul class="right">
        <li><a v-link="{ name: 'cart' }">{{total}} items in cart</a></li>
      </ul>
    </div>
  </nav>
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
