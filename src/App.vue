<template>
  <div class="container">
    <Navbar :total="totalItemsInCart"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from 'components/Navbar'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(['totalItemsInCart'])
  }
}
</script>

<style></style>