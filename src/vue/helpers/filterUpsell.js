import { filterKeys, shuffleArray } from '@vue/helpers'

export const filterUpsell = (collection, cartProductIds, limit) => {
  if(collection) {
    const allKeys = shuffleArray(Object.keys(collection)).map(key => parseInt(key))
    const keys = filterKeys(allKeys, cartProductIds)
    let upsell = {};
    for (let i = 0; i < limit; i++) { 
      upsell[keys[i]] = collection[keys[i]]
    }
    return upsell;
  } else {
    return false
  }
};