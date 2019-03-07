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
      controls: true
    }
    768: {
      items: 4
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