/******* Product Slideshow *******/

const options = {
  speed: 350,
  items: 1,
  slideBy: 'page',
  controls: false,
  nav: true,
  navAsThumbnails: true
}

const slideshowInterval = setInterval(() => {
  const { slideshow } = window.theme
  if(slideshow) {
    slideshow('.c-productSlideshow', options)
    clearInterval(slideshowInterval);
  }
}, 100);