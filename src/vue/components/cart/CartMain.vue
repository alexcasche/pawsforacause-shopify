<template>
  <div class="c-cartMain">
    <div 
      v-if="shoppingCart.count" 
      class="c-cartMain__items"
    >
      <CartMainItem 
        v-for="(item, index) in shoppingCart.items"
        :key="index"
        :item="item"
      />
    </div>
    <div 
      v-else 
      class="c-cartMain__empty">
      <span class='c-cartMain__emptyMessage'>
        {{ settings.empty_message }}
      </span>
      <span 
        v-if="settings.empty_action" 
        class='c-cartMain__emptyAction'
      >
        {{ settings.empty_action }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartMainItem from "./CartMainItem.vue";

export default {
  components: {
    CartMainItem
  },
  computed: {
    ...mapGetters('cart', ['shoppingCart', 'settings'])
  }
}
</script>