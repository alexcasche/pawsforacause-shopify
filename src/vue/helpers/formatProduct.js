import { formatFloat } from '@vue/helpers'

export const formatProduct = shopifyProduct => {
  let productObj = { ...shopifyProduct }
  const priceKeys = ["compare_at_price", "compare_at_price_max", "compare_at_price_min", "price", "price_max", "price_min"]
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
  })
  return {
    [productObj.id]: productObj
  };
}
