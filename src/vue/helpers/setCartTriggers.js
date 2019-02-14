export const setCartTriggers = (openCart, updateCart) => {
  setOpenTriggers(openCart);
  setUpdateTriggers(updateCart);
}

const setOpenTriggers = openCart => {
  const openTriggers = document.querySelectorAll(".trigger-cart-open");
  openTriggers.forEach(trigger => trigger.addEventListener("click", openCart))
}

const setUpdateTriggers = (updateCart) => {
  const updateTriggers = document.querySelectorAll(".trigger-cart-update");
  updateTriggers.forEach(trigger => trigger.addEventListener("click", function() {
    updateTriggerClick(this, updateCart);
  }))
}

function updateTriggerClick(target, updateCart) {
  const { action, variants, quantities } = target.dataset
  const variantArray = variants.split(",");
  const quantityArray = quantities.split(",")
  let updates = {};
  variantArray.forEach((variant, index) => {
    updates[variant] = quantityArray[index]
  })
  updateCart({ updates })
}