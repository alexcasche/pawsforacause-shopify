export const uniqueArray = array => {
  return array.filter((item, index) => array.indexOf(item) === index)
}