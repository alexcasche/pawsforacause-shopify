<template>
  <div class="c-cartHeader">
    <button class="c-cartHeader__close" @click.stop="closeCart">
      <i class="c-cartHeader__closeIcon fa fa-times" aria-hidden="true"></i>
    </button>
    <h2 class="c-cartHeader__heading u-textCenter">
      {{ settings.heading_text }}
      <span class="c-cartHeader__count">
        {{ shoppingCart.count }}
      </span>
    </h2>
    <div class="c-cartHeader__subtotal u-textCenter">
      {{ settings.subtotal_label }}
      <span class="c-cartHeader__subtotalPrice">
        {{ subtotal }}
      </span>
    </div>
    <a v-if="shoppingCart.count" class="c-cartHeader__button c-button-large c-button--submit u-fullWidth" href="/checkout">
      {{ settings.checkout_button }}
    </a>
    <button v-else class="c-cartHeader__button c-button-large c-button--cancel u-fullWidth" disabled="disabled">
      {{ settings.checkout_button }}
    </button>
    <div v-if="errorMessage" class="c-cartHeader__error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters('cart', ['shoppingCart', 'settings', 'subtotal', 'errorMessage']),
  },
  methods: {
    ...mapMutations('cart', ['closeCart']),
  }
}
</script>

