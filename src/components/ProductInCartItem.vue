<template>
  <ul class="collection">
    <li class="collection-item avatar">
      <img v-bind:src="localImgUrl" alt="" class="circle">
      <span class="title">{{title}}</span>
      <div class="secondary-content">
        <span class="qty-btn" @click="removeProductFromCart(productId)">-</span>
        &nbsp;
        <span>{{qty}}</span>
        &nbsp;
        <span class="qty-btn" @click="addProductToCart(productId)">+</span>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductInCart',
  props: ['title', 'qty', 'productId', 'image'],
  methods: {
    ...mapActions(['addProductToCart', 'removeProductFromCart'])
  },
  computed: {
    localImgUrl () {
      return 'static/' + this.image
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qty-btn {
  cursor: pointer;
}
</style>
