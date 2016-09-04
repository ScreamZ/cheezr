<template lang="html">
  <h1>Let's Play with Falcor!</h1>
</template>

<script>
import falcorModel from '../services/falcor'

export const loadModel = async function(falcorModel) {
  let value = await falcorModel.get('productsById[0]["description", "title", "imageUrl"]')
  jlog(value)
  return value
}

export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {
    // loadModel(falcorModel)
  },
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
