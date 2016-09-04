<template>
  <div class="card sticky-action">
    <div class="card-image waves-effect waves-block waves-light">
      <img v-link="{ name: 'productDetails', params: { id: productId }}" alt="Click here for more details" class="activator" :src="localImgUrl">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{{title}}<i class="material-icons right">more_vert</i></span>
      <p>15€</p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{{title}}<i class="material-icons right">close</i></span>
      <p>{{supportingText}}</p>
    </div>
    <div class="card-action">
      <md-button
        text="Add to Cart"
        icon="shopping_cart"
        icon-align="left"
      ></md-button>
    </div>
  </div>
</template>

<script>
import { addProductToCart } from '../vuex/modules/cart/actions'
import MdButton from './Materialize/mdButton'
import falcorModel from '../services/falcor'

export default {
  props: ['title', 'supportingText', 'image', 'productId'],
  components: {
    MdButton
  },
  vuex: {
    actions: {
      addProductToCart
    }
  },
  computed: {
    localImgUrl() {
      return 'static/' + this.image
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
