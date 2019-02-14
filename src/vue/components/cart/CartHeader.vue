<template>
  <div class="c-cartHeader">
    <button class="c-cartHeader__close" @click="closeCart">
      <i class="c-cartHeader__closeIcon fa fa-times" aria-hidden="true"></i>
    </button>
    <h2 class="c-cartHeader__heading u-textCenter">
      {{ settings.heading_text }}
      <span class="c-cartHeader__count">
        {{ shoppingCart.count }}
      </span>
      <span class="c-cartHeader__subtotal">
        {{ settings.subtotal_text }}{{ subtotal }}
      </span>
    </h2>
    <a v-if="!cartEmpty" class="c-cartHeader__button c-button-large c-button--submit u-fullWidth" href="/checkout">
      {{ settings.checkout_button }}
    </a>
    <button v-else class="c-cartHeader__button c-button-large c-button--cancel u-fullWidth" disabled="disabled">
      {{ settings.checkout_button }}
    </button>
    <div class="c-cartHeader__error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters('cart', ['shoppingCart', 'settings', 'errorMessage']),
    subtotal() {
      return `${this.settings.currency.symbol}${this.shoppingCart.total}`
    }
  },
  methods: {
    ...mapMutations('cart', ['closeCart']),
  }
}
</script>

