export const productVariant = (item, form) => {
  const { option1, option2, option3 } = form
  const { variants } = item
  const options = `${option1}${option2}${option3}`
  let activeVariant;
  Object.keys(variants).forEach(id => {
    if(variants[id].options.join(',') === options) {
      activeVariant = item.variants[id]
    }
  })
  return activeVariant
}