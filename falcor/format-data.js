module.exports = function(res, pathSet) {
  var formattedResult = []

  res.documents.forEach((product, index) => {
      pathSet[2].forEach(key => {
        if (!product.content[key]) return
        formattedResult.push({
          path: ['productsById', index, key],
          value: product.content[key]
        })
      })
  })

  return formattedResult
}
