import Vue from 'vue';
import Vuex from 'vuex';
import cart from './cart';
import modal from './modal';

Vue.config.devtools = true
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    modal
  }
})