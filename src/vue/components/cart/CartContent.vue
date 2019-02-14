<template>
  <div class="c-cartContent">
    <div v-if="shoppingCart.count" class="c-cartContent__items">
      <CartItem 
        v-for="(item, index) in shoppingCart.items"
        :key="index"
        :item="item"
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
import CartItem from "./CartItem.vue";

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapGetters('cart', ['shoppingCart', 'settings'])
  }
}
</script>