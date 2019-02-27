/******* Account *******/

if(window.location.hash != "#orders") {
  document.querySelector("#account").classList.remove("u-hidden");
} else {
  if (location.hash) {
    setTimeout(() => { window.scrollTo(0, 0)}, 1);
  }
  document.querySelector("#orders").classList.remove("u-hidden");
}