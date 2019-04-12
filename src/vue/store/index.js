import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import cart from './cart';
import collection from './collection';
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
    collection,
    modal
  },
  plugins: [vuexLocalStorage.plugin]
})