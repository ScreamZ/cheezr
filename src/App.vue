<template>
  <div class="container">
    <Navbar :total="totalItemsInCart"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from 'components/Navbar'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(['totalItemsInCart'])
  },
  methods: {
    ...mapActions(['fetchProductsFromServer', 'initCart'])
  },
  created: function () {
    this.fetchProductsFromServer()
      .then(() => {
        this.initCart()
      })
  }
}
</script>

<style></style>