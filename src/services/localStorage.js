export const loadItem = (itemId) => {
  // eslint-disable-next-line no-undef
  return localStorage.getItem(itemId)
}

export const saveItem = (itemId, value) => {
  // eslint-disable-next-line no-undef
  localStorage.setItem(itemId, value)
}
