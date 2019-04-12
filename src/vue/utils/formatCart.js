import { formatFloat } from "@vue/utils";

export const formatCart = shopifyCart => {
  const cartInfo = {
    count: shopifyCart.item_count,
    total: formatFloat(shopifyCart.total_price),
    note: shopifyCart.note
  };
  let cartItems = {};
  shopifyCart.items.forEach(item => {
    let cartItem = { ...item }
    const priceKeys = ["discounted_price", "original_line_price", "line_price", "original_price", "price", "total_discount"]
    priceKeys.forEach(key => {
      if(cartItem[key] > 0) {
        cartItem[key] = formatFloat(cartItem[key])
      } else {
        cartItem[key] = false
      }
    })
    cartItems[item.id] = cartItem;
  });
  return {
    ...cartInfo,
    items: { ...cartItems }
  };
};
