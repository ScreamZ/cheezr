<template>
  <div class="valign-wrapper">
    <md-icon class="right valign" v-on:click="decrease">remove</md-icon>
    <input type="text" name="qty" value="{{qty}}" size="1" max="20" min="0" class="left" readonly></input>
    <md-icon class="left valign" v-on:click="increase">add</md-icon>
  </div>
</template>

<script>
export default {
  props: ['qty', 'productId'],
  methods: {
    increase: function() {
      this.$dispatch('increase')
    },
    decrease: function() {
      this.$dispatch('decrease')
    }

  }
}
</script>

<style scoped>
input {
  text-align: center;
}
i.material-icons {
  cursor: pointer;
}
</style>
