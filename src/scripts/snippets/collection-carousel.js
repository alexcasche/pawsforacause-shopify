/******* Collection Carousel *******/

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
      edgePadding: 40,
      speed: 450
    },
    1024: {
      items: 4,
      edgePadding: 60,
      speed: 550
    }
  }
}

const carouselInterval = setInterval(() => {
  const { carousel } = window.theme
  if(carousel) {
    carousel('.c-collectionCarousel', options)
    clearInterval(carouselInterval);
  }
}, 100);