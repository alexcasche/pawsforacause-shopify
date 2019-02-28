/******* Product *******/

const slideshow = document.querySelector(".c-product .c-slideshow");
const slideshowTrack = document.querySelector(".c-product .c-slideshow__track");
const slideshowThumbnails = document.querySelector(".c-product .c-slideshow__thumbnails");
const carousel = document.querySelector(".c-product .c-carousel");
const carouselTrack = document.querySelector(".c-product .c-carousel__track");
const carouselBubbles = document.querySelector(".c-product .c-carousel__bubbles");

const tnsReady = setInterval(() => {
  const { tns } = window.theme
  if(tns) {
    const productSlideshow = buildSlideshow(tns);
    slideshow.classList.remove('slideshow-loading');
    const productCarousel = buildProductCarousel(tns);
    slideshow.classList.remove('carousel-loading');
    clearInterval(tnsReady);
  }
}, 100);

function buildSlideshow(tns) {
  return tns({
    container: slideshowTrack,
    mode: 'gallery',
    speed: 350,
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: true,
    navPosition: "bottom",
    navAsThumbnails: true,
    navContainer: slideshowThumbnails
  })
}

function buildProductCarousel(tns) {
  return tns({
    container: carouselTrack,
    mode: 'carousel',
    mouseDrag: true,
    speed: 350,
    items: 1,
    slideBy: 'page',
    center: true,
    controls: false,
    nav: true,
    navPosition: "bottom",
    navContainer: carouselBubbles
  })
}