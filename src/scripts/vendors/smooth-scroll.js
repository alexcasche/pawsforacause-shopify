import SmoothScroll from "smooth-scroll";
import "smooth-scroll/dist/smooth-scroll.polyfills.min";

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 750,
  easing: "easeOutQuad"
});
