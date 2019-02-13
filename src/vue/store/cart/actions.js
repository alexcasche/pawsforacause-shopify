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
    if (state.isFetching) {
      return;
    } else {
      commit("toggleFetching");
      axios.post("/cart/update.js", qs.stringify(payload), axiosHeaders).then(response => {
        commit("setCart", normalizeShopifyCart(response.data));
        commit("setError", error);
        commit("toggleFetching");
      }).catch(error => {
        commit("toggleFetching");
        return error.message;
      });
    }
  }
};
