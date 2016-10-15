import kuzzle from 'services/kuzzle'

export const addProductToList = (store, payload) => {
  store.commit('ADD_PRODUCT_TO_LIST', payload)
}

export const fetchProductsFromServer = (store) => {
  return new Promise((resolve, reject) => {
    kuzzle
      .dataCollectionFactory('products')
      .advancedSearchPromise({})
      .then(res => {
        res.documents.forEach(document => {
          addProductToList(store, {id: document.id, content: document.content})
        })
        resolve()
      })
      .catch(err => {
        console.error(err.message)
        reject()
      })
  })
}
