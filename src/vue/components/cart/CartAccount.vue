<template>
  <div v-if="shoppingCart" class="c-cartAccount c-card">
    <div v-if="cartCount > 0" class="c-cartAccount__full">
      <div class="c-cartAccount__side">
        <h3 class="c-cartAccount__heading">
          Cart
          <span class="c-cartAccount__count">
            {{ cartCount }}
          </span>
        </h3>
        <span class="c-cartAccount__subtotal">
          Subtotal: ${{ shoppingCart.total }}
        </span>
      </div>
      <div class="c-cartAccount__side">
        <a class="c-cartAccount__button c-button-small c-button--submit" href="/checkout">
          Checkout
        </a>
      </div>
      <div class="c-cartAccount__items">
        <div v-for="(item, index) in shoppingCart.items" 
          :key="index" 
          @click="toggleCart"
          class="c-cartAccount__item"
        >
          <img class="c-cartAccount__itemImage" :src="item.image" :alt="'Paws For A Cause ' + item.title" />
          <div class="c-cartAccount__itemInfo">
            <span class="c-cartAccount__itemVendor">
              {{ item.vendor }}
            </span>
            <span class="c-cartAccount__itemTitle">
              {{ item.title }}
            </span>
            <span class="c-cartAccount__itemVariant">
              {{ item.variant }}
            </span>
          </div>
          <div class="c-cartAccount__itemCount">
            {{ item.quantity }}
          </div>
        </div>
      </div>
      <div class="c-cartAccount__freeShipping">
        Congrats! Your order ships free.
      </div>
    </div>
    <div v-else class="c-cartAccount__empty">
      <div class="c-cartAccount__side">
        <span class="c-cartAccount__icon" v-html="iconCart" />
      </div>
      <div class="c-cartAccount__side">
        <h3 class="c-cartAccount__heading">
          Your cart is empty
        </h3>
        <span class="c-cartAccount__message">
          Fill it up to save some pups!
        </span>
        <a class="c-cartAccount__button c-button-small c-button--buy" href="/collections/all-products">
          Start Shopping!
        </a>
      </div>
    </div>
  </div>
  <div v-else class="c-cartAccount">
    <div class="c-loadingBlocks">
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
    ...mapGetters('cart', ['shoppingCart', 'cartCount']),
  },
  methods: {
    ...mapMutations('cart', ['toggleCart'])
  }
}
</script>

<style scoped>
@import "settings/index.css";
@import "tools/index.css";

.v-cartAccount {
  @mixin flex column, flex-start, flex-start;
}
.v-cartAccount--empty {
  @media(--mobile) {
    @mixin flex row;
  }
}
.v-cartAccount__side {
  width: 100%;
  &:first-child {
    margin-bottom: 20px;
  }
  @media(--mobile) {
    &:first-child {
      width: 100px;
      margin-bottom: 0;
    }
    &:last-child {
      margin-left: 50px;
    }
  }
}
.v-cartAccount__cartIcon {
  display: block;
  width: 100px;
  fill: $color-blue;
  margin-right: 20px;
  @media(--xs) {
    margin: auto;
  }
}
.v-cartAccount__heading {
  @mixin flex row, flex-start, center;
  margin-bottom: 5px;
  @media(--xs) {
    text-align: center;
  }
}
.v-cartAccount__text {
  display: block;
  margin-bottom: 20px;
  line-height: 1.5;
   @media(--xs) {
    text-align: center;
  }
}
.v-cartAccount__loading {
  display: inline-flex;
  margin-left: 15px;
}

</style>
