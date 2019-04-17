import { formatFloat } from '@vue/utils'

export const formatCollection = (collection, showSoldOut = false) => {
  if(collection) {
    let collectionObj = {}
    collection.forEach(item => {
      let itemObj = { ...item }
      const priceKeys = ["compare_at_price", "compare_at_price_max", "compare_at_price_min", "price", "price_max", "price_min"]
      priceKeys.forEach(key => {
        if(itemObj[key] > 0) {
          itemObj[key] = formatFloat(itemObj[key])
        } else {
          itemObj[key] = false
        }
      })
      let inCart = false
      itemObj.variants = {}
      item.variants.forEach(variant => {
        itemObj.variants[variant.id] = variant
        itemObj.variants[variant.id].compare_at_price = variant.compare_at_price > 0 ? formatFloat(variant.compare_at_price) : false
        itemObj.variants[variant.id].price = variant.price > 0 ? formatFloat(variant.price) : false
      })
      if(item.available || showSoldOut) {
        collectionObj[item.id] = itemObj
      }
    })
    return collectionObj
  } else {
    return false
  }
};