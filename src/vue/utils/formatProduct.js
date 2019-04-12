import { formatFloat } from '@vue/utils'

export const formatProduct = shopifyProduct => {
  let productObj = { ...shopifyProduct }
  const priceKeys = ["compare_at_price", "compare_at_price_max", "compare_at_price_min", "price", "price_max", "price_min"]
  if(productObj.options[0] === "Title") productObj.options = []
  priceKeys.forEach(key => {
    if(productObj[key] > 0) {
      productObj[key] = formatFloat(productObj[key])
    } else {
      productObj[key] = false
    }
  })
  productObj.variants = {}
  shopifyProduct.variants.forEach(variant => {
    productObj.variants[variant.id] = variant
    productObj.variants[variant.id].compare_at_price = variant.compare_at_price > 0 ? formatFloat(variant.compare_at_price) : false
    productObj.variants[variant.id].price = variant.price > 0 ? formatFloat(variant.price) : false
    if(variant.options[0] === "Title") {
      productObj.variants.options = []
      productObj.variants.option1 = null
    }
  })
  return {
    [productObj.id]: productObj
  };
}
