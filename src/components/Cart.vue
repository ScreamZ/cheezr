<template>
  <div>
    <h1>Ton panier plein de came</h1>
    <div class="collection">
      <product-item v-for="(productQty, key) in cartList"
                    :title="productList[key].title"
                    :product-id="key"
                    :qty="productQty"
                    :image="productList[key].imageUrl"
      ></product-item>
    </div>
    <router-link :to="{name: 'products'}">
      <md-button
        text="Back to products"
        icon="fast_rewind"
        icon-align="left"
      ></md-button>
    </router-link>

    <md-button
      @click.prevent="checkout"
      text="Check-out"
      icon="credit_card"
      icon-align="left"
    ></md-button>
  </div>
</template>

<script>
  import MdButton from './Materialize/mdButton'
  import ProductItem from './ProductInCartItem'
  import { mapState } from 'vuex'

  export default {
    components: {
      ProductItem,
      MdButton
    },
    data () {
      return {
        paypalInstance: null,
        basketPriceSum: 15.5
      }
    },
    computed: {
      ...mapState({
        cartList: state => state.cart.cartContent,
        productList: state => state.products
      })
    },
    methods: {
      checkout () {
        this.paypalInstance.tokenizeAsync({
          flow: 'checkout',
          amount: this.basketPriceSum,
          currency: 'EUR',
          locale: 'fr_FR'
        })
          .then(payload => {
            // Tokenization succeeded!
            return window.kuzzle.queryPromise({
              controller: 'kuzzle-plugin-braintree/braintree',
              action: 'checkout'
            }, { body: { payment_method_nonce: payload.nonce } })
              .then((res) => {
                // TODO : Handle transaction success
                // Doc will be exposed soon
                console.log('Success transaction', res.transaction)
              })
          })
          .catch(err => {
            // TODO : Handle errors
            if (err.type !== 'CUSTOMER') {
              console.error('Error tokenizing:', err)
            }
          })
      }
    },
    created () {
      // Fetch paypal client token from kuzzle, it has been promisifiedAll by bluebird
      this.$store.dispatch('getBraintreePaypalInstance')
        .then(paypalInstance => {
          this.paypalInstance = paypalInstance
        })
        .catch(err => {
          // TODO : Handle errors
        })
    }
  }
</script>

<style>

</style>
