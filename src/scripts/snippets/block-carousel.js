/******* Carousel *******/

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
      controls: true,
      nav: false,
      edgePadding: 60,
      speed: 450
    },
    1024: {
      disable: true
    }
  }
}

const carouselInterval = setInterval(() => {
  const { carousel } = window.theme
  if(carousel) {
    carousel('.c-carousel', options)
    clearInterval(carouselInterval);
  }
}, 100);