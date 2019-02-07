<template>
  <div v-if="shoppingCart" class="c-accountCart c-card">
    <div v-if="cartCount > 0" class="c-accountCart__full">
      <div class="c-accountCart__side">
        <h3 class="c-accountCart__heading">
          Cart
          <span class="c-accountCart__count">
            {{ cartCount }}
          </span>
        </h3>
        <span class="c-accountCart__subtotal">
          Subtotal: ${{ shoppingCart.total }}
        </span>
      </div>
      <div class="c-accountCart__side">
        <a class="c-accountCart__button c-button-small c-button--submit" href="/checkout">
          Checkout
        </a>
      </div>
      <div class="c-accountCart__items">
        <div v-for="(item, index) in shoppingCart.items" 
          :key="index" 
          @click="toggleCart"
          class="c-accountCart__item"
        >
          <img class="c-accountCart__itemImage" :src="item.image" :alt="'Paws For A Cause ' + item.title" />
          <div class="c-accountCart__itemInfo">
            <span class="c-accountCart__itemVendor">
              {{ item.vendor }}
            </span>
            <span class="c-accountCart__itemTitle">
              {{ item.title }}
            </span>
            <span class="c-accountCart__itemVariant">
              {{ item.variant }}
            </span>
          </div>
          <div class="c-accountCart__itemCount">
            {{ item.quantity }}
          </div>
        </div>
      </div>
      <div class="c-accountCart__freeShipping">
        {{ shippingMessage }}
      </div>
    </div>
    <div v-else class="c-accountCart__empty">
      <div class="c-accountCart__side">
        <span class="c-accountCart__icon" v-html="iconCart" />
      </div>
      <div class="c-accountCart__side">
        <h3 class="c-accountCart__heading">
          Your cart is empty
        </h3>
        <span class="c-accountCart__message">
          Fill it up to save some pups!
        </span>
        <a class="c-accountCart__button c-button-small c-button--buy" href="/collections/all-products">
          Start Shopping!
        </a>
      </div>
    </div>
  </div>
  <div v-else class="c-accountCart">
    <div class="c-accountCart__loading c-loadingBlocks">
      <span/><span/><span/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { iconCart } from '@vue/assets/svg';

export default {
  data() {
    return { iconCart }
  },
  computed: {
    ...mapGetters('cart', ['shoppingCart', 'cartCount', 'freeShipping']),
    shippingMessage() {
      const difference = (this.freeShipping - this.shoppingCart.total).toFixed(2);
      if(difference >= 0) {
        return `Only $${difference} more for free shipping`
      } else {
        return "Hooray!  Your order ships free"
      }
    }
  },
  methods: {
    ...mapMutations('cart', ['toggleCart'])
  },
}
</script>
