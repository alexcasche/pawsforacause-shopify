import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import cart from './cart';
import modal from './modal';

Vue.config.devtools = true
Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
  reducer: state => ({
    cart: {
      shoppingCart: state.cart.shoppingCart,
      settings: state.cart.settings,
      collection: state.cart.collection
    }
  })
})

export default new Vuex.Store({
  modules: {
    cart,
    modal
  },
  plugins: [vuexLocalStorage.plugin]
})