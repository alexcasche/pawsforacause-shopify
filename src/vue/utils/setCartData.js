export const setCartData = shoppingCart => {
  const { count } = shoppingCart
  const cartCountEls = document.querySelectorAll(".data-cart-count");
  cartCountEls.forEach(el => el.textContent = count);
}