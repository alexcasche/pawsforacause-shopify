<template>
  <div class="c-collectionGrid__item o-lost-item">
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
    </a>
  </div>
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

<a class="c-collectionItem o-flexColumn trigger-product-buy" 
  data-product-handle="{{ product.handle }}"
  href="{{ product.url }}"
  draggable="false"
>
  <div class="c-collectionItem__images">
    <img class="c-collectionItem__image lazyload" 
      src="{{ product.images[0] | img_url: '150x150' }}" 
      data-src="{{ product.images[0] | img_url: '500x500' }}"
      alt="{{ product.images[0].alt | escape}}" 
    />
  </div>
  {% include "product-status" with product %}
  <h2 class="c-collectionItem__title">{{ product.title }}</h2>
  {% include "product-prices" with product %}
</a>