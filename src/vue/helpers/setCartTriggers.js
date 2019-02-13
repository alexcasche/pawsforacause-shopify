export const setCartTriggers = (openCart, updateCart) => {
  setOpenTriggers(openCart);
  setUpdateTriggers(updateCart);
}

const setOpenTriggers = openCart => {
  const openTriggers = document.querySelectorAll(".trigger-cart-open");
  openTriggers.forEach(trigger => trigger.addEventListener("click", openCart))
}

const setUpdateTriggers = (updateCart) => {
  const updateTriggers = document.querySelectorAll(".trigger-cart-updates");
  console.log(updateTriggers);
  updateTriggers.forEach(trigger => trigger.addEventListener("click", updateTriggerClick))

}

function updateTriggerClick(event) {
  console.log('clicked');
  const data = event.target.dataset;
  console.log(data);
}