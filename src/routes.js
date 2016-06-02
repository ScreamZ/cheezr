import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'

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
    }
  })
}
