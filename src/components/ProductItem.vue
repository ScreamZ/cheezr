<template>
  <md-card>
    <span slot="title" class="activator">
        {{title}}<md-icon right>more_vert</md-icon>
    </span>
    <!-- wave effect directive -->
    <div slot="image" class="waves-effect waves-block waves-light">
        <img class="activator" v-bind:src="image">
    </div>
    <p>
        <a v-link="{ name: 'productDetails', params: { id: productId }}">Click here for more details</a>
    </p>
    <div slot="reveal">
        <span class="card-title grey-text text-darken-4">
            {{title}}
        </span>
        <p>
            {{supportingText}}
        </p>
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
