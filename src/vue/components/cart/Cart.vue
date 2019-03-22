<template lang="html">
  <div class="c-cart" id="cart">
    <transition name="overlay-fade">
      <span v-if="isOpen"  
        class="c-overlay" 
        @click="toggleCart"
      />
    </transition>
    <transition name="cart-slide">
      <div v-if="isOpen" class="c-cart__drawer">
        <CartHeader />
        <CartMain v-if="!cartLoading"/>
        <div v-else class="c-cart__loading c-loadingDots">
          <span/><span/><span/><span/>
        </div>
        <CartUpsell />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { setCartData, setCartTriggers } from '@vue/helpers'
import CartHeader from './CartHeader.vue'
import CartMain from './CartMain.vue'
import CartUpsell from './CartUpsell.vue'

export default {
  props: {
    settings_json: {
      type: String,
      default: "{}"
    },
    collection_json: {
      type: String,
      default: "{}"
    }
  },
  components: {
    CartHeader,
    CartMain,
    CartUpsell
  },
  computed: {
    ...mapState({ modalOpen: state => state.modal.contentId }),
    ...mapGetters('cart', ['isOpen', 'shoppingCart', 'isLoading']),
  },
  methods: {
    ...mapMutations('cart', ['toggleCart', 'setSettings', 'setCollection', 'toggleLoading']),
    ...mapActions('cart', ['initCart', 'addCart', 'changeCart', 'clearCart', 'updateCart', 'setProducts']),
  },
  watch: {
    isOpen: {
      handler(val) {
        if(!this.modalOpen) document.body.classList.toggle("u-noScroll");
      }
    },
    shoppingCart: {
      handler(val) {
        setCartData(val)
        this.setProducts()
      }
    }
  },
  async mounted() {
    const actions = {
      toggleCart: this.toggleCart,
      addCart: this.addCart,
      changeCart: this.changeCart,
      clearCart: this.clearCart,
      updateCart: this.updateCart
    }
    await this.initCart()
    const parsedSettings = await JSON.parse(this.settings_json)
    const parsedCollection = await JSON.parse(this.collection_json)
    await this.setSettings(parsedSettings)
    await this.setCollection(parsedCollection)
    await setCartTriggers(actions)
    document.body.classList.add("status-cart-ready");
    this.toggleLoading()
  },
}
</script>

<style scoped>
.cart-slide-enter,
.cart-slide-leave-to {
  transform: translateX(100%);
}
.cart-slide-leave,
.cart-slide-enter-to {
  transform: translateX(0);
}
.overlay-fade-enter,
.overlay-fade-leave-to {
  opacity: 0;
}
.overlay-fade-leave,
.overlay-fade-enter-to {
  opacity: 1;
}
</style>