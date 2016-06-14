<template>
  <div class="valign-wrapper">
    <md-icon class="right valign" v-on:click="removeProductFromCart(productId)">remove</md-icon>
    <input type="text" name="qty" value="{{qty}}" size="1" max="20" min="0" class="left"></input>
    <md-icon class="left valign" v-on:click="addProductToCart(productId)">add</md-icon>
  </div>
</template>

<script>
import * as actions from '../actions'

export default {
  props: ['qty'],
  vuex: {
    actions
  }
}
</script>

<style scoped>
input {
  text-align: center;
}
</style>
