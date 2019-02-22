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
        <img class="c-cartUpsellAdd__image"
        :src="imageUrl(item.featured_image, '.jpg', '300x300')"
        :alt="imageAlt(item)"
        />
      </div>
      <ProductSelect
        :product="item"
        classPrefix="c-cartUpsellAdd__"
        :quantity_label="settings.add_quantity_label"
        :button_text="settings.add_cart_utton"
        :sold_out_text="settings.add_sold_out"
      />

    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import ProductSelect from "@vue/components/product/ProductSelect.vue";

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ProductSelect
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
