/******* Cart *******/

const cartTrigger = document.querySelectorAll(".trigger-cart-open")[0];
const cartInterval = setInterval(initCart, 1);

function initCart() {
  const cartReady = document.getElementById("cart");
  if(cartReady) {
    clearInterval(cartInterval);
    cartTrigger.click();
  }
}