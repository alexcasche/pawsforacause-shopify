import { shuffleArray } from '@vue/helpers'

export const filterCollection = (collection, shoppingCart) => {
  if(collection) {
    let collectionKeys = shuffleArray(Object.keys(collection))
    let collectionFiltered = {};
    for (let i = 0; i < 12; i++) { 
      collectionFiltered[collectionKeys[i]] = collection[collectionKeys[i]]
    }
    return collectionFiltered;
  } else {
    return false
  }
};