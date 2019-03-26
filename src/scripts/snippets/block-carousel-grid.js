/******* Carousel Grid *******/

const options = {
  mouseDrag: true,
  speed: 350,
  items: 1,
  slideBy: 'page',
  center: true,
  controls: false,
  nav: true,
  responsive: {
    768: {
      disable: true
    }
  }
}

const carouselInterval = setInterval(() => {
  const { carousel } = window.theme
  if(carousel) {
    carousel('.c-carouselGrid', options)
    clearInterval(carouselInterval);
  }
}, 100);