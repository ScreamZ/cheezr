<template>
  <md-collection-item class="avatar">
    <img v-bind:src="image" alt="" class="circle">
    <span class="title">{{title}}</span>
    <a slot="secondary-content">
      <qty-buttons
        :qty="qty"
        v-on:increase="addProductToCart(productId)"
        v-on:decrease="removeProductFromCart(productId)"
      ></qty-buttons>
    </a>
  </md-collection-item>
</template>

<script>
import QtyButtons from './QtyButtons'
import * as actions from '../vuex/modules/cart/actions'

export default {
  props: ['title', 'qty', 'productId', 'image'],
  components: {
    QtyButtons
  },
  vuex: {
    actions
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li.md-collection-item {
  list-style: none;
}
</style>
