/******* Slideshow *******/

const slideshowTriggers = document.querySelectorAll('.trigger-slideshow');
slideshowTriggers.forEach(trigger => trigger.addEventListener('click', updateSlideshow));

function updateSlideshow() {
  const { slideshowId, slideshowIndex } = event.target.dataset
  const slideshow = document.getElementById(slideshowId)
  const thumbnails = slideshow.querySelectorAll(".c-slideshow__thumbnailItem")
  const images = slideshow.querySelectorAll(".c-slideshow__image")
  thumbnails.forEach(trigger => trigger.classList.remove("is-active"))
  images.forEach(image => image.classList.remove("is-active"))
  thumbnails[slideshowIndex].classList.add("is-active")
  images[slideshowIndex].classList.add("is-active")
}