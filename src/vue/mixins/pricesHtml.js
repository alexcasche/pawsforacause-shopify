export const pricesHtml = {
  methods: {
    pricesHtml(item, type, showRange = false) {
      if(type === "variant") {
        return pricesVariant(item)
      } else {
        return pricesProduct(item, showRange)
      }
    }
  }
}

const pricesVariant = (variant) => {
  const { compare_at_price, price } = variant
  const { symbol } = window.theme.cart.currency
  let output = '';
  if(compare_at_price && compare_at_price > price) {
    output += `
    <span class="c-prices__salePrice">${symbol}${price}</span>
    <span class="c-prices__comparePrice">${symbol}${compare_at_price}</span>
    `.trim()
  } else {
    output += `
    <span class="c-prices__basePrice">${symbol}${price}</span>
    `.trim()
  }
  return output
}

const pricesProduct = (product, showRange = false) => {
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
    <span class="c-prices__comparePrice">${compareString}</span>
    <span class="c-prices__salePrice">${priceString}</span>
    `.trim()
  } else {
    output = `
    <span class="c-prices__basePrice">${priceString}</span>
    `.trim()
  }
  return output
}