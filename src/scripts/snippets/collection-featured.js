/******* Collection Featured *******/

const arrayShuffle = array => {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const featuredCollections = document.querySelectorAll(".c-collectionFeatured");
featuredCollections.forEach(featuredCollection => {
  if(featuredCollection.classList.contains("is-loading")) {
    const { randomize, limit } = featuredCollection.dataset
    if(randomize || limit) {
      let collectionItems = [...featuredCollection.querySelectorAll(".c-collectionGrid__item")]
      if(randomize) collectionItems = arrayShuffle(collectionItems)
      if(limit) collectionItems = collectionItems.slice(0, limit)
      featuredCollection.innerHTML = ""
      const collectionFragment = document.createDocumentFragment()
      collectionItems.forEach(item => {
        collectionFragment.appendChild(item);
      })
      featuredCollection.appendChild(collectionFragment)
    }
  }
})