<template>
  <div class="c-cartContent">
    <div v-if="!cartEmpty" class="c-cartContent__items">
      <CartItem 
        v-for="(item, index) in shoppingCart.items"
        :key="index"
      />
    </div>
    <div v-else class="c-cartContent__empty">
      <span class='c-cartContent__emptyMessage'>
        {{ settings.empty_message }}
      </span>
      <span v-if="settings.empty_action" class='c-cartContent__emptyAction'>
        {{ settings.empty_action }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters('cart', ['shoppingCart', 'settings'])
  }
}
</script>