import { arrayUnique } from '@vue/utils'

export const formatOptions = product => {
  const { options, variants } = product
  if(options && variants) {
    let optionsObj = {}
    options.forEach((option, index) => {
      optionsObj[`option${index + 1}`] = {
        title: option,
        options: []
      }
    })
    Object.keys(variants).forEach((id, index, array) => {
      const variant = variants[id]
      const optionKeys = ['option1', 'option2', 'option3']
      optionKeys.forEach(key => {
        if(optionsObj[key]) {
          optionsObj[key].options.push(variant[key]);
          if(array.length === index + 1) {
            optionsObj[key].options = arrayUnique(optionsObj[key].options)
          }
        }
      })
    })
    return optionsObj
  }
}