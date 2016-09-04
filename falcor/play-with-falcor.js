export const loadModel = async function(falcorModel) {
  let value = await falcorModel.get('productsById[0..2]["description", "title", "imageUrl"]')
  jlog(value)
  return value
}
