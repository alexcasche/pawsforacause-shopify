<template>
  <div class="c-cartItem">
    <img class="c-cartItem__image" 
      :src="item.image"
      :alt="imageAlt" 
    />
    <div class="c-cartItem__info">
      <span class="c-cartItem__vendor">
        {{ item.vendor }}
      </span>
      <span class="c-cartItem__title">
        {{ item.title }}
      </span>
      <span class="c-cartItem__variant">
        {{ item.variant }}
      </span>
    </div>
    <div class="c-cartItem__actions">
      <button class="c-cartItem__remove">
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    imageAlt() {
      const { image, title } = this.item
      const { name } = window.theme.shop
      return image.alt ? image.alt : `${name} ${title}`
    }
  },
  methods: {
    ...mapActions('cart', ['updateCart'])
  }
}
</script>