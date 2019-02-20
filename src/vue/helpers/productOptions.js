import { uniqueArray } from '@vue/helpers'

export const productOptions = product => {
  let options = {}
  product.options.forEach((option, index) => {
    options[`option${index + 1}`] = {
      title: option,
      options: []
    }
  })
  Object.keys(product.variants).forEach((id, index, array) => {
    const variant = product.variants[id]
    const optionKeys = ['option1', 'option2', 'option3']
    optionKeys.forEach(key => {
      if(options[key]) {
        options[key].options.push(variant[key]);
        if(array.length === index + 1) {
          options[key].options = uniqueArray(options[key].options)
        }
      }
    })
  })
  return options
}