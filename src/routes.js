import ProductList from './components/ProductList'
import Cart from './components/Cart'

export default [
  {
    path: '/',
    name: 'products',
    component: ProductList
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]
