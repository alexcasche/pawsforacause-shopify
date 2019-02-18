export const filterSlice = (upsellCollection, shoppingCart) => {
  let collectionTrimmed = {}
  let collectionKeys = Object.keys(upsellCollection)
  collectionKeys.forEach(key => {
    if(!shoppingCart && !shoppingCart.items[key]) {
      collectionTrimmed[key] = upsellCollection[key]
    }
  })
  return collectionTrimmed
}