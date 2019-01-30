<template>
  <div v-if="cartCount > 0" class="v-cartAccount v-cartAccount--empty c-card">
    <div class="v-cartAccount__row">
      <div class="v-cartAccount__summary">
        <h3 class="v-cartAccount__heading">
          Cart
          <span class="v-cartAccount__count">
            5
          </span>
        </h3>
        <span class="v-cartAccount__subtotal">
          Subtotal: $20.00
        </span>
      </div>
    </div>
  </div>
  <div v-else-if="shoppingCart" class="v-cartAccount v-cartAccount--empty c-card">
    <div class="v-cartAccount__side">
      <span class="v-cartAccount__cartIcon" v-html="iconCart" />
    </div>
    <div class="v-cartAccount__side">
      <h3 class="v-cartAccount__heading">
        Your cart is empty
      </h3>
      <span class="v-cartAccount__text">
        Fill it up to save some rescue dogs!
      </span>
      <a class="c-button--small c-button--buy" href="/collections/all-products">
          Shop Now
      </a>
    </div>
  </div>
  <div v-else class="v-cartAccount v-cartAccount--loading c-card">
     <h3 class="v-cartAccount__heading">
        Loading
        <Loading class="v-cartAccount__loading" />
      </h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { iconCart } from '@vue/assets/svg';
import Loading from '../shared/Loading.vue';

export default {
  components: {
    Loading
  },
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
  @media(--mobile-max) {
    margin-top: -30px;
  }
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
