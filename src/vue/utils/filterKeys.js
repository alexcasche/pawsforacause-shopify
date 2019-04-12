export const filterKeys = (keys, filterBy) => {
  return keys.filter(key => filterBy.indexOf(key) < 0)
}