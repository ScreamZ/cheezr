module.exports = function(res, pathSet) {
  var formattedResult = []

  res.documents.forEach((product) => {
      pathSet[2].forEach(key => {
        if (!product.content[key]) return
        formattedResult.push({
          path: ['productsById', product.id, key],
          value: product.content[key]
        })
      })
  })

  return formattedResult
}
