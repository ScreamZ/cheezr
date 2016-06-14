<template>
  <md-collection-list-item class="avatar">
    <img v-bind:src="image" alt="" class="circle">
    <span class="title">{{title}}</span>
    <a slot="secondary-content" href="#!">
      {{qty}}
    </a>
  </div>
</template>

<script>
export default {
  props: ['title', 'qty', 'productId', 'image'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li.md-collection-item {
  list-style: none;
}
</style>
