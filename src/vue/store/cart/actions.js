import axios from "axios";
import qs from "qs";
import { 
  axiosHeaders, 
  formatCart, 
  formatFloat, 
  formatItem, 
  formatProduct 
} from "@vue/utils";

export default {
  initCart: async ({ commit, dispatch }) => {
    const cart = await axios.get("/cart.js")
      .then(response => commit("setCart", formatCart(response.data)))
      .catch(error => console.log(error.message))
  },
  actionWrapper: async ({ state, commit, dispatch }, payload) => {
    if (state.isFetching) return
    const { action, hideCart } = payload
    commit("toggleFetching");
    await dispatch(action);
    commit("toggleFetching");
    const cartAccount = document.getElementById("cartAccount");
    if(!cartAccount && !hideCart) commit("openCart");
  },
  addCart: async ({ state, commit, dispatch }, payload) => {
    commit("setError", false)
    if(!Array.isArray(payload)) payload = [payload]
    for (let i = 0; i < payload.length; i++) { 
      const item = payload[i];
      const hideCart = i < payload.length - 1 ? true : false
      const action = await axios.post("/cart/add.js", qs.stringify(item), axiosHeaders)
        .then(response => { 
          const { [item.id]: omit, ...cartItems } = state.shoppingCart.items
          commit("setCart", { ...state.shoppingCart,
            count: state.shoppingCart.count + item.quantity,
            total: (parseFloat(state.shoppingCart.total) + formatFloat(response.data.price) * item.quantity).toFixed(2),
            items: { [item.id]: formatItem(response.data), ...cartItems }
          })
        })
        .catch(error => commit("setError", error.response.data.description))
      dispatch("actionWrapper", { action, hideCart })
    }
  },
  changeCart: async ({ state, commit, dispatch }, payload) => {
    commit("setError", false)
    const action = await axios.post("/cart/change.js", qs.stringify(payload), axiosHeaders)
      .then(response => commit("setCart", formatCart(response.data)))
      .catch(error => commit("setError", error.response.data.description))
    dispatch("actionWrapper", { action })
  },
  clearCart: async ({ commit, dispatch }) => {
    commit("setError", false)
    const action = await axios.post("/cart/clear.js")
      .then(response => commit("setCart", formatCart(response.data)))
      .catch(error => commit("setError", error.response.data.description))
    dispatch("actionWrapper", { action });
  },
  updateCart: async ({ state, commit, dispatch }, payload) => {
    commit("setError", false)
    const action = await axios.post("/cart/update.js", qs.stringify(payload), axiosHeaders)
      .then(response => commit("setCart", formatCart(response.data)))
      .catch(error => commit("setError", error.response.data.description))
    dispatch("actionWrapper", { action })
  },
  setProducts: async ({ state, commit, dispatch }) => {
    const { items } = state.shoppingCart
    const itemKeys = Object.keys(items);
    for (let i = 0; i < itemKeys.length; i++) { 
      const item = items[itemKeys[i]]
      const hideCart = true
      if(!state.products[item.product_id]) {
        const action = await axios.get(`/products/${item.handle}.js`)
          .then(response => commit("setProduct", formatProduct(response.data)))
          .catch(error => console.log(error.message))
        dispatch("actionWrapper", { action, hideCart })
      }
    } 
  }
};
