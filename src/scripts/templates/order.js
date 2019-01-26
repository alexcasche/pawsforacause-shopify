/******* Order Page Events *******/

import axios from 'axios';
import qs from 'qs';
import { RefCountDisposable } from 'rx';

function addReorder() {
  const lineItems = document.querySelectorAll(".data-order-item");
  let payload = {};
  lineItems.forEach(lineItem => {
    const id = lineItem.dataset.variant;
    const quantity = lineItem.dataset.quantity;
    payload[id] = quantity;
  })
  axios.post("/cart/clear.js");
  axios.post("/cart/update.js", qs.stringify({ updates: payload }))
    .then(() => window.location.href = "/checkout");
}

const reorderTrigger = document.querySelector(".trigger-reorder");
reorderTrigger.addEventListener("click", addReorder);

 /*
function addReorder() {
  const lineItems = document.querySelectorAll(".data-order-item");
  let payload = {};
  lineItems.forEach(lineItem => {
    const id = lineItem.dataset.variant;
    const quantity = lineItem.dataset.quantity;
    payload[id] = quantity;
  })
  axios
    .post("/cart/update.js", { updates: qs.stringify(payload) })
    .then(response => console.log(response.data));
}*/