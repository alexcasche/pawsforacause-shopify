import { formatFloat } from '@vue/helpers'

export const formatItem = shopifyItem => {
  let cartItem = { ...shopifyItem }
  const priceKeys = ["discounted_price", "original_line_price", "line_price", "original_price", "price", "total_discount"]
  priceKeys.forEach(key => {
    if(cartItem[key] > 0) {
      cartItem[key] = formatFloat(cartItem[key])
    } else {
      cartItem[key] = false
    }
  })
  return {
    [cartItem.id]: cartItem
  };
};
