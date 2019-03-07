/******* Product Carousel *******/

const options = {
  mouseDrag: true,
  speed: 350,
  items: 1,
  slideBy: 'page',
  center: true,
  controls: false,
  nav: true
}

const carouselInterval = setInterval(() => {
  const { carousel } = window.theme
  if(carousel) {
    carousel('.c-productCarousel', options)
    clearInterval(carouselInterval);
  }
}, 100);