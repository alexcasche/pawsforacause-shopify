import { shuffleArray } from '@vue/helpers'

export const filterCollection = collection => {
  if(collection) {
    let collectionKeys = shuffleArray(Object.keys(collection))
    let collectionFiltered = {};
    for (let i = 0; i < 6; i++) { 
      collectionFiltered[collectionKeys[i]] = collection[collectionKeys[i]]
    }
    return collectionFiltered;
  } else {
    return false
  }
};