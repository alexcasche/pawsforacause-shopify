<template>
  <div class="c-cartUpsellAdd">
    <button @click="setAdd(false)"
      class="c-cartUpsellAdd__close o-flexColumn" 
    >
      <i class="c-cartUpsellAdd__closeIcon fa fa-times" aria-hidden="true"></i>
    </button>
     <span class="c-cartUpsellAdd__title">
      {{ item.title }}
    </span>
    <div class="c-cartUpsellAdd__main o-flexRow">
      <div class="c-cartUpsellAdd__imageBox o-flexColumn">
        <img class="c-cartUpsellAdd__image lazyload"
        :src="imageUrl(item.featured_image, '.jpg', '120x120')"
        :data-src="imageUrl(item.featured_image, '.jpg', '300x300')"
        :alt="imageAlt(item)"
        />
      </div>
      <ProductAdd
        :product="item"
        class_name="c-cartUpsellAdd"
        :quantity_label="settings.add_quantity_label"
        :button_active_text="settings.add_cart_button"
        :button_disabled_text="settings.add_sold_out"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import ProductAdd from "@vue/components/product/ProductAdd.vue";

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ProductAdd
  },
  computed: {
    ...mapGetters('cart', ['settings'])
  },
  methods: {
    ...mapMutations('cart', ['setAdd']),
    ...mapActions('cart', ['settings', 'addCart']),
  }
}
</script>
