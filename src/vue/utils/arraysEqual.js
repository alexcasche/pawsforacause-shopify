export const arraysEqual = (arr1, arr2) => {
  return arr1.length !== arr2.length
    ? false
    : arr1.find((val, index) => val !== arr2[index])
      ? false
      : true
}