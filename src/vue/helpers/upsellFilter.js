import { shuffleArray } from '@vue/helpers'

export const upsellFilter = (collection, shoppingCart, limit) => {
  if(collection) {
    let collectionKeys = shuffleArray(Object.keys(collection))
    let collectionFiltered = {};
    for (let i = 0; i < limit; i++) { 
      collectionFiltered[collectionKeys[i]] = collection[collectionKeys[i]]
    }
    return collectionFiltered;
  } else {
    return false
  }
};