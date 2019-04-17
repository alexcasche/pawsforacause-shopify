export const sortCollection = (collection, sortBy) => {
  if(!collection) return false
  let collectionArray = []
  Object.keys(collection).forEach(key => collectionArray.push(collection[key]))
  switch(sortBy) {
    case "price-ascending":
      collectionArray = [ ...collectionArray.sort((a, b) => (parseFloat(a.price) > parseFloat(b.price)) ? 1 : -1)]
      break;
    case "price-descending":
    collectionArray = [ ...collectionArray.sort((a, b) => (parseFloat(a.price) < parseFloat(b.price)) ? 1 : -1)]
      break;
  }
  const inStock = collectionArray.filter(item => item.available);
  const soldOut = collectionArray.filter(item => !item.available);
  return [ ...inStock, ...soldOut ]
}