export const filterCollection = collection => {
  const available = collection.filter(product => product.available);
  const soldout = collection.filter(product => !product.available);
}

const sortSoldOut = collection => {
  const available = collection.filter(product => product.available);
  console.log(available)
}