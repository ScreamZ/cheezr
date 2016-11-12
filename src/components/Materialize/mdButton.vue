<template lang="html">
  <a @click="$emit('click', $event)" class="waves-effect waves-light btn">
    <i v-if="icon" class="material-icons" :class="{ 'left': iconLeft, 'right': iconRight }">
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
  }
}
</script>