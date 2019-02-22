export const productVariant = (item, form) => {
  const { variants } = item
  const variantKeys = Object.keys(variants)
  if(variantKeys.length === 1) {
    return variants[variantKeys[0]]
  } else {
    const { option1, option2, option3 } = form
    const options = `${option1}${option2}${option3}`
    let activeVariant;
    Object.keys(variants).forEach(id => {
      if(variants[id].options.join(',') === options) {
        activeVariant = item.variants[id]
      }
    })
    return activeVariant
  }
}