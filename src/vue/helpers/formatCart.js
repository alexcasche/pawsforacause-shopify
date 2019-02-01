export const formatCart = shopifyCart => {
  const cartInfo = {
    count: shopifyCart.item_count,
    total: (shopifyCart.total_price / 100).toFixed(2),
    note: shopifyCart.note
  };
  let cartItemsObj = {};
  shopifyCart.items.forEach(itemObj => {
    cartItemsObj[itemObj.variant_id] = {
      id: itemObj.variant_id,
      image: itemObj.image,
      price: itemObj.price,
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
