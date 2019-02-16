export const pricesProduct = (product, currencySymbol, classPrefix, showRange = false) => {
  const { price, price_varies, compare_at_price, compare_at_price_varies } = product
  let priceHtml = '';
  let onSale = compare_at_price && compare_at_price > price;
  let priceString = `${currencySymbol}${price}`
  if(showRange && price_varies) {
    const { price_min, price_max } = product
    priceString = `${currencySymbol}${price_min} - ${currencySymbol}${price_max}`
  }
  if(onSale) {
    let compareString = `${currencySymbol}${compare_at_price}`
    if(showRange && compare_at_price_varies) {
      const { compare_at_price_min, compare_at_price_max } = product
      compareString = `${currencySymbol}${compare_at_price_min} - ${currencySymbol}${compare_at_price_max}`
    }
    priceHtml = `
    <span class="${classPrefix}comparePrice">${compareString}</span>
    <span class="${classPrefix}salePrice">${priceString}</span>
    `.trim()
  } else {
    priceHtml = `
    <span class="${classPrefix}basePrice">${priceString}</span>
    `.trim()
  }
  return priceHtml
}