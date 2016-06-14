<template>
  <div class="valign-wrapper">
    <md-icon class="left valign">add</md-icon>
    <input type="text" name="qty" value="{{qty}}" size="1" max="20" min="0" class="left"></input>
    <md-icon class="right valign">remove</md-icon>
  </div>
</template>

<script>
export default {
  props: ['qty']
}
</script>

<style scoped>
input {
  text-align: center;
}
</style>
