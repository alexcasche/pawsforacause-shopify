export const pricesHtml = {
  methods: {
    pricesHtml(item, type, classPrefix, classPrefixBase = false, showRange = false) {
      if(type === "variant") {
        return pricesVariant(item, classPrefix, classPrefixBase)
      } else {
        return pricesProduct(item, classPrefix, classPrefixBase, showRange)
      }
    }
  }
}

const pricesVariant = (variant, classPrefix, classPrefixBase) => {
  const { compare_at_price, price } = variant
  const { symbol } = window.theme.cart.currency
  let output = '';
  if(compare_at_price && compare_at_price > price) {
    output += `
    <span class="${classPrefixBase ? classPrefixBase + 'salePrice ' : ''}${classPrefix}salePrice">${symbol}${price}</span>
    <span class="${classPrefixBase ? classPrefixBase + 'comparePrice ' : ''}${classPrefix}comparePrice">${symbol}${compare_at_price}</span>
    `.trim()
  } else {
    output += `
    <span class="${classPrefixBase ? classPrefixBase + 'basePrice ' : ''}${classPrefix}basePrice">${symbol}${price}</span>
    `.trim()
  }
  return output
}

const pricesProduct = (product, classPrefix, classPrefixBase, showRange = false) => {
  const { price, price_varies, compare_at_price, compare_at_price_varies } = product
  const { symbol } = window.theme.cart.currency
  let output = '';
  let onSale = compare_at_price && compare_at_price > price;
  let priceString = `${symbol}${price}`
  if(showRange && price_varies) {
    const { price_min, price_max } = product
    priceString = `${symbol}${price_min} - ${symbol}${price_max}`
  }
  if(onSale) {
    let compareString = `${symbol}${compare_at_price}`
    if(showRange && compare_at_price_varies) {
      const { compare_at_price_min, compare_at_price_max } = product
      compareString = `${symbol}${compare_at_price_min} - ${symbol}${compare_at_price_max}`
    }
    output = `
    <span class="${classPrefixBase ? classPrefixBase + 'comparePrice ' : ''}${classPrefix}comparePrice">${compareString}</span>
    <span class="${classPrefixBase ? classPrefixBase + 'salePrice ' : ''}${classPrefix}salePrice">${priceString}</span>
    `.trim()
  } else {
    output = `
    <span class="${classPrefixBase ? classPrefixBase + 'basePrice ' : ''}${classPrefix}basePrice">${priceString}</span>
    `.trim()
  }
  return output
}