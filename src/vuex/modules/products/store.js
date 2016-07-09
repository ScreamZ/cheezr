const state = {
  'parmigiano': {
    title: 'Parmigiano 30 mesi',
    description: 'Il miglior formaggio del mondo',
    image: 'http://www.springbankcheesecrowfoot.com/wordpress/wp-content/uploads/2012/12/Parmigiano-Reggiano.jpg'
  },
  'prosciutto': {
    title: 'Prosciutto di Parma',
    description: 'Il miglior formaggio del mondo',
    image: 'http://storage.aicod.it/portale/academiabarilla/view/1200/prosciuttodiparmaDOP-34.JPG'
  },
  'aceto': {
    title: 'Aceto balsamico di Modena',
    description: 'Il miglior formaggio del mondo',
    image: 'http://www.visitmodena.it/it/immagini/balsamico.jpg'
  }
}

const mutations = {
  ADD_PRODUCT_TO_LIST (state, id, productDetails) {
    state[id] = productDetails
  }
}

export default {
  state,
  mutations
}
