export const filterCollection = (collection, filterBy) => {
  if(!collection) return false
  if(!filterBy) return collection
  let collectionArray = []
  collection.forEach(item => {
    const formattedTags = item.tags.map(tag => tag.toLowerCase().replace(" ", "-"))
    if(formattedTags.indexOf(filterBy) >= 0) collectionArray.push(item)

  })
  return collectionArray
}