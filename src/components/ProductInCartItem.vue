<template>
  <ul class="collection">
    <li class="collection-item avatar">
      <img v-bind:src="image" alt="" class="circle">
      <span class="title">{{title}}</span>
    </li>
  </ul>
  <!-- <md-collection-item class="avatar">
    
    <a slot="secondary-content">
      <qty-buttons
        :qty="qty"
        v-on:increase="addProductToCart(productId)"
        v-on:decrease="removeProductFromCart(productId)"
      ></qty-buttons>
    </a>
  </md-collection-item> -->
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['title', 'qty', 'productId', 'image'],
  methods: {
    ...mapActions(['addProductToCart', 'removeProductFromCart'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li.md-collection-item {
  list-style: none;
}
</style>
