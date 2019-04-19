<template>
  <a class="c-collectionItem o-flexColumn trigger-product-buy" 
    draggable="false"
    :href="itemURL"
  >
    <div class="c-collectionItem__images">
      <img ref="itemImage"
        class="c-collectionItem__image lazyload"
        :src="imageUrl(item.featured_image, '.jpg', '150x150')"
        :data-src="imageUrl(item.featured_image, '.jpg', '500x500')" 
        :alt="imageAlt(item)"
      />
    </div>
    <h2 class="c-collectionItem__title">{{ item.title }}</h2>
    <ProductPrices 
      class_name="c-collectionItem"
      :product="item"
    />
  </a>
</template>

<script>
import ProductPrices from "@vue/components/product/ProductPrices.vue"

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    ProductPrices
  },
  computed: {
    itemURL() {
      return `/products/${this.item.handle}`
    }
  },
  updated() {
    this.$refs.itemImage.classList.add("lazyload")
  }
}
</script>