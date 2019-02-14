import axios from "axios";
import qs from "qs";
import { axiosHeaders, formatCart, formatProduct } from "@vue/helpers";

export default {
  setCart: ({ commit }) => {
    axios.get("/cart.js").then(response => {
      commit("setCart", formatCart(response.data));
    }).catch(error => {
      return error.message;
    });
  },
  updateCart: ({ commit, state }, payload) => {
    if (state.isFetching) return
    commit("toggleFetching");
    axios.post("/cart/update.js", qs.stringify(payload), axiosHeaders).then(response => {
      commit("setCart", formatCart(response.data));
      commit("toggleFetching");
    }).catch(error => {
      commit("setError", error.response.data.description);
      commit("toggleFetching");
      commit("openCart");
    });
  },
  clearCart: () => {
    if (state.isFetching) return
    commit("toggleFetching");
    axios.post("/cart/clear.js").then(response => {
      commit("setCart", formatCart(response.data));
      commit("toggleFetching");
    }).catch(error => {
      commit("setError", error.response.data.description);
      commit("toggleFetching");
      commit("openCart");
    });
  }
};
