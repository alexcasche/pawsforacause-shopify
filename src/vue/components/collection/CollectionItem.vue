<template>
  <a class="c-collectionItem o-flexColumn trigger-product-buy" 
    draggable="false"
  >
    <div class="c-collectionItem__images">
      <img class="c-collectionItem__image lazyload" 
        :src="imageUrl(item.featured_image, '.jpg', '150x150')"
        :data-src="imageUrl(item.featured_image, '.jpg', '500x500')" 
        :alt="imageAlt(item)"
      />
    </div>
    <h2 class="c-collectionItem__title">{{ item.title }}</h2>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>