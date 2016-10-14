<template>
  <div class="card sticky-action">
    <div class="card-image waves-effect waves-block waves-light">
      <router-link :to="{ name: 'productDetails', params: { id: productId }}">
        <img alt="Click here for more details" class="activator" :src="localImgUrl">        
      </router-link>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{{title}}<i class="material-icons right">more_vert</i></span>
      <p v-if="price">{{price}}€</p>
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
import MdButton from './Materialize/mdButton'

export default {
  name: 'ProductItem',
  components: {
    MdButton
  },
  props: ['title', 'supportingText', 'image', 'productId', 'price'],
  computed: {
    localImgUrl () {
      return 'static/' + this.image
    }
  }
}
</script>