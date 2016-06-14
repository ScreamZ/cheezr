<template>
  <md-card>
    <span slot="title" class="activator">
        {{title}}<md-icon right>more_vert</md-icon>
    </span>
    <div slot="image" class="waves-effect waves-block waves-light">
        <img v-link="{ name: 'productDetails', params: { id: productId }}" alt="Click here for more details" class="activator" v-bind:src="image">
    </div>
    <p>
        <!-- <a v-link="{ name: 'productDetails', params: { id: productId }}">Click here for more details</a> -->
        <md-button class="waves-light ">
          <md-icon left>shopping_cart</md-icon>Add to Cart
        </md-button>
    </p>
    <div slot="reveal">
        <span class="card-title grey-text text-darken-4">
            {{title}}
        </span>
        <p>
            {{supportingText}}
        </p>
        <md-button class="waves-light">
          <md-icon left>shopping_cart</md-icon>Add to Cart
        </md-button>
    </div>
  </md-card>
</template>

<script>
export default {
  props: ['title', 'supportingText', 'image', 'productId'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
