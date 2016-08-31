<template>
  <div class="container">
    <Navbar :total="totalItemsInCart"></Navbar>
    {{description}}
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import { totalItemsInCart } from './vuex/modules/cart/getters'
import falcorModel from './services/falcor'

let loadModel = async function() {
  let value = await falcorModel.getValue('productsById[0]["title"]')
  return value
}

export default {
  name: 'App',
  components: {
    Navbar
  },
  replace: false,
  vuex: {
    getters: {
      totalItemsInCart
    }
  },
  data() {
    return {
      description: falcorModel.getValue('productsById[0]["title"]')
    }
  },
  ready() {
    loadModel().then((value) => {console.log('async ' + value)})
  }
}
</script>

<style></style>
