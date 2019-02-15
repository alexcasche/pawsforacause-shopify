export const pricesVariant = (variant, currencySymbol, classPrefix) => {
  const { compare_at_price, price } = variant
  let priceHtml = '';
  if(compare_at_price && compare_at_price > price) {
    priceHtml += `
    <span class="${classPrefix}comparePrice">${currencySymbol}${compare_at_price}</span>
    <span class="${classPrefix}salePrice">${currencySymbol}${price}</span>
    `.trim()
  } else {
    priceHtml += `
    <span class="${classPrefix}basePrice">${currencySymbol}${price}</span>
    `.trim()
  }
  return priceHtml
}