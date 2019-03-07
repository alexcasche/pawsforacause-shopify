import { tns } from "tiny-slider/src/tiny-slider"
window.theme.carousel = buildCarousels;
window.theme.slideshow = buildSlideshows;

function buildCarousels(selector, options){
  const carousels = document.querySelectorAll(`${selector}.is-loading`);
  carousels.forEach(carousel => {
    const carouselTrack = carousel.querySelector(".c-carousel__track");
    const carouselButtons = carousel.querySelector(".c-carousel__buttons");
    const carouselBubbles = carousel.querySelector(".c-carousel__bubbles");
    tns({ 
      mode: 'carousel', 
      container: carouselTrack, 
      controlsContainer: carouselButtons,
      navContainer: carouselBubbles,
      ...options
    })
    carousel.classList.remove("is-loading")
  })
}

function buildSlideshows(selector, options){
  const slideshows = document.querySelectorAll(`${selector}.is-loading`);
  slideshows.forEach(slideshow => {
    const slideshowTrack = slideshow.querySelector(".c-slideshow__track");
    const slideshowButtons = slideshow.querySelector(".c-slideshow__buttons");
    const slideshowThumbnails = slideshow.querySelector(".c-slideshow__thumbnails");
    tns({ 
      mode: 'gallery', 
      container: slideshowTrack,
      controlsContainer: slideshowButtons,
      navContainer: slideshowThumbnails,
      ...options
    })
    slideshow.classList.remove("is-loading")
  })
}