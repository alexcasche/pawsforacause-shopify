/******* Product *******/

const tnsReady = setInterval(() => {
  const { tns } = window.theme
  if(tns) {
    const productGallery = buildProductGallery(tns);
    const productCarousel = buildProductCarousel(tns);
    document.querySelector('.c-productMain__slideshowWrapper').classList.remove('u-hidden');
    document.querySelector('.c-productMain__carouselWrapper').classList.remove('u-hidden');
    clearInterval(tnsReady);
  }
}, 100);

function buildProductGallery(tns) {
  return tns({
    container: '.c-productMain__slideshow',
    mode: 'gallery',
    speed: 350,
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: true,
    navPosition: "bottom",
    navAsThumbnails: true,
    navContainer: ".c-productMain__slideshowThumbnails"
  })
}

function buildProductCarousel(tns) {
  return tns({
    container: '.c-productMain__carousel',
    mode: 'carousel',
    mouseDrag: true,
    speed: 350,
    items: 1,
    slideBy: 'page',
    center: true,
    controls: false,
    nav: true,
    navPosition: "bottom",
    navContainer: ".c-productMain__carouselDots"
  })
}