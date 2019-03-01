export const arrayUnique = array => {
  return array.filter((item, index) => array.indexOf(item) === index)
}