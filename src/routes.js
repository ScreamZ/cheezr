import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

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
    }
  })

  return router
}
