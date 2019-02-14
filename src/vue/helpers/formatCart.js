import { formatFloat } from '@vue/helpers'

export const formatCart = shopifyCart => {
  const cartInfo = {
    count: shopifyCart.item_count,
    total: formatFloat(shopifyCart.total_price),
    note: shopifyCart.note
  };
  let cartItemsObj = {};
  shopifyCart.items.forEach(itemObj => {
    cartItemsObj[itemObj.variant_id] = {
      id: itemObj.variant_id,
      image: itemObj.image,
      price: formatFloat(itemObj.price),
      quantity: itemObj.quantity,
      title: itemObj.product_title,
      variant: itemObj.variant_title,
      vendor: itemObj.vendor
    };
  });
  return {
    ...cartInfo,
    items: cartItemsObj
  };
};
