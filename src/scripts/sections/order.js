/******* Order *******/

import axios from 'axios';
import qs from 'qs';

function addReorder() {
  const lineItems = document.querySelectorAll(".data-order-item");
  const cartTrigger = document.querySelector('.trigger-cart');
  let payload = {};
  lineItems.forEach(lineItem => {
    const id = lineItem.dataset.variant;
    const quantity = lineItem.dataset.quantity;
    payload[id] = quantity;
  })
  axios.post("/cart/update.js", qs.stringify({ updates: payload }))
    .then(() => cartTrigger.click())
    .catch(() => cartTrigger.click())
}

const reorderTrigger = document.querySelector(".trigger-reorder");
reorderTrigger.addEventListener("click", addReorder);