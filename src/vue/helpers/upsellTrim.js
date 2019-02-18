import { shuffleArray } from '@vue/helpers'

export const upsellTrim = (collection, limit) => {
  if(collection) {
    let collectionKeys = shuffleArray(Object.keys(collection))
    let collectionTrimmed = {};
    for (let i = 0; i < limit; i++) { 
      collectionTrimmed[collectionKeys[i]] = collection[collectionKeys[i]]
    }
    return collectionTrimmed;
  } else {
    return false
  }
};