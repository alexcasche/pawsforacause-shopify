export const sortCollection = (collection, sortBy) => {
  const available = collection.filter(product => product.available);
  const soldOut = collection.filter(product => !product.available);

  switch(sortBy) {
    case "":
      this.addCart({ id, quantity: 1 })
      break;
    case "remove":
      this.changeCart({ id, quantity: quantity - 1 })
      break
    case "clear":
      this.changeCart({ id, quantity: 0 })
  }
}