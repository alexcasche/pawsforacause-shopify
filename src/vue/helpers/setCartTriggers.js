export const setCartTriggers = (actions) => {
  const { toggleCart, addCart, changeCart, clearCart, updateCart } = actions;
  setToggleTriggers(toggleCart);
  setAddTriggers(addCart);
  setChangeTriggers(changeCart);
  setClearTriggers(clearCart);
  setUpdateTriggers(updateCart);
}

/*********  Open Cart  *********/
const setToggleTriggers = toggleCart => {
  const toggleTriggers = document.querySelectorAll(".trigger-cart");
  toggleTriggers.forEach(trigger => trigger.addEventListener("click", toggleCart))
}


/*********  Add Cart  *********/
const setAddTriggers = addCart => {
  const addTriggers = document.querySelectorAll(".trigger-cart-add");
  addTriggers.forEach(trigger => trigger.addEventListener("click", function() {
    addTriggerClick(this, addCart);
  }))
}
function addTriggerClick(target, addCart) {
  const { variants, quantities } = target.dataset
  const variantArray = variants.split(",");
  const quantityArray = quantities.split(",")
  let updates = [];
  variantArray.forEach((variant, index) => {
    updates.push({ id: variant, quantity: parseInt(quantityArray[index]) })
  })
  addCart(updates)
}

/*********  Change Cart  *********/
const setChangeTriggers = changeCart => {
  const addTriggers = document.querySelectorAll(".trigger-cart-change");
  addTriggers.forEach(trigger => trigger.addEventListener("click", function() {
    changeTriggerClick(this, changeCart);
  }))
}
function changeTriggerClick(target, changeCart) {
  const { variants, quantities } = target.dataset
  const variant = variants.split(",")[0];
  const quantity = quantities.split(",")[0];
  changeCart({ id: variant, quantity })
}

/*********  Clear Cart  *********/
const setClearTriggers = clearCart => {
  const addTriggers = document.querySelectorAll(".trigger-cart-clear");
  addTriggers.forEach(trigger => trigger.addEventListener("click", clearCart))
}

/*********  Update Cart  *********/
const setUpdateTriggers = updateCart => {
  const updateTriggers = document.querySelectorAll(".trigger-cart-update");
  updateTriggers.forEach(trigger => trigger.addEventListener("click", function() {
    updateTriggerClick(this, updateCart);
  }))
}
function updateTriggerClick(target, updateCart) {
  const { variants, quantities } = target.dataset
  const variantArray = variants.split(",");
  const quantityArray = quantities.split(",")
  let updates = {};
  variantArray.forEach((variant, index) => {
    updates[variant] = parseInt(quantityArray[index])
  })
  updateCart({ updates })
}