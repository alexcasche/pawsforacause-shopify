import { formatFloat } from '@vue/utils'

export const formatItem = shopifyItem => {
  let itemObj = { ...shopifyItem }
  const priceKeys = ["discounted_price", "original_line_price", "line_price", "original_price", "price", "total_discount"]
  priceKeys.forEach(key => {
    if(itemObj[key] > 0) {
      itemObj[key] = formatFloat(itemObj[key])
    } else {
      itemObj[key] = false
    }
  })
  return itemObj
};
