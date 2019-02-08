/******* Account *******/

if(window.location.hash != "#orders") {
  document.querySelector("#account").classList.remove("u-hidden");
} else {
  document.querySelector("#orders").classList.remove("u-hidden");
}