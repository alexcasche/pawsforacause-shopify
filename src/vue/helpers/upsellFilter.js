export const upsellFilter = (upsellCollection, shoppingCart) => {
  let collectionFiltered = {}
  let collectionKeys = Object.keys(upsellCollection)
  let cartKeys = []
  Object.keys(shoppingCart.items).forEach(key => {
    cartKeys.push(shoppingCart.items[key].product_id)
  })
  collectionKeys.forEach(key => {
    if(!cartKeys.indexOf(parseInt(key)) >= 0) {
      collectionFiltered[key] = upsellCollection[key]
    }
  })
  return collectionFiltered
}