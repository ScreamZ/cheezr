<template>
  <nav>
    <div class="nav-wrapper">
      <a class="brand-logo">Cheezr!</a>
      <ul class="right">
        <li>
          <router-link :to="{name: 'cart'}">{{total}} items in cart</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
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
