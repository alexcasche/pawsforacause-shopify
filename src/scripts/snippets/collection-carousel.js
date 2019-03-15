/******* Collection Carousel *******/

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

const options = {
  mouseDrag: true,
  speed: 350,
  items: 1,
  slideBy: 'page',
  center: true,
  controls: false,
  nav: false,
  responsive: {
    480: {
      items: 2,
      center: false,
      controls: true,
      edgePadding: 20,
      speed: 450
    },
    1024: {
      items: 4,
      edgePadding: 60,
      speed: 550
    }
  }
}

const collectionCarousels = document.querySelectorAll(".c-collectionCarousel");
collectionCarousels.forEach(collectionCarousel => {
  if(collectionCarousel.classList.contains("is-loading")) {
    const { randomize, limit } = collectionCarousel.dataset
    const collectionTrack = document.querySelector(".c-collectionCarousel__track")
    if(randomize || limit) {
      let collectionSlides = [...collectionCarousel.querySelectorAll(".c-collectionCarousel__slide")]
      if(randomize) collectionSlides = arrayShuffle(collectionSlides)
      if(limit) collectionSlides = collectionSlides.slice(0, limit)
      collectionTrack.innerHTML = ""
      const collectionFragment = document.createDocumentFragment()
      collectionSlides.forEach(slide => {
        collectionFragment.appendChild(slide);
      })
      collectionTrack.appendChild(collectionFragment)
    }
  }
  const carouselInterval = setInterval(() => {
    const { carousel } = window.theme
    if(carousel) {
      carousel('.c-collectionCarousel', options)
      clearInterval(carouselInterval);
    }
  }, 100);
})