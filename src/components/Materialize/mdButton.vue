<template lang="html">
  <a @click="clicked" class="waves-effect waves-light btn">
    <i v-if="icon" class="material-icons" v-bind:class="{ 'left': iconLeft, 'right': iconRight }">
      {{icon}}
    </i>
    {{text}}
  </a>
</template>

<script>
export default {
  props: ['text', 'icon', 'iconAlign', 'onClick'],
  data () {
    return {
    }
  },
  computed: {
    iconLeft () {
      return this.iconAlign === 'left'
    },
    iconRight () {
      return this.iconAlign === 'right'
    }
  },
  ready () {},
  attached () {},
  methods: {
    clicked () {
      if (this.onClick) {
        this.onClick()
      }
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
