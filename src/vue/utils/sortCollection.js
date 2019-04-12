export const sortCollection = collection => {
  sortSoldOut(collection)
}

const sortSoldOut = collection => {
  const available = collection.filter(product => product.available);
  console.log(available)
}