<template>
  <div v-if="shoppingCart" class="c-cartAccount c-card">
    <div v-if="cartCount == 0" class="c-cartAccount__full">

    </div>
    <div v-else class="c-cartAccount__row">
      <div class="c-cartAccount__side">
        <span class="c-cartAccount__icon" v-html="iconCart" />
      </div>
      <div class="c-cartAccount__side c-cartAccount__side--large">
        <h3 class="c-cartAccount__heading">
          Your cart is empty
        </h3>
        <span class="c-cartAccount__message">
          Fill it up to save some pups!
        </span>
        <a class="c-cartAccount__shop c-button-small c-button--buy" href="/collection/all-products">
          Start Shopping!
        </a>
      </div>
    </div>
  </div>
  <div v-else class="c-cartAccount c-loadingBlocks">
    <span/><span/><span/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { iconCart } from '@vue/assets/svg';

export default {
  data() {
    return { iconCart }
  },
   computed: {
    ...mapGetters('cart', ['shoppingCart', 'cartCount']),
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
