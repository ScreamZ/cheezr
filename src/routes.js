import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import PlayWithFalcor from './components/PlayWithFalcor'

export default function (router) {
  router.map({
    '/': {
      name: 'products',
      component: ProductList,
      auth: true
    },
    '/product/:id': {
      name: 'productDetails',
      component: ProductDetails
    },
    '/cart': {
      name: 'cart',
      component: Cart
    },
    '/falcor': {
      name: 'playWithFalcor',
      component: PlayWithFalcor
    }
  })

  return router
}
