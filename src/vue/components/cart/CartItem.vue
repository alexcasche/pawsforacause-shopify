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
      <button class="c-cartItem__remove" @click="changeItem('clear')">
        <i class="c-cartItem__removeIcon fa fa-times" aria-hidden="true"></i>
      </button>
      <div class="c-cartItem__quantity o-flexRow">
        <button class="c-cartItem__quantityButton o-flexColumn">
          <i class="c-cartItem__quantityIcon fas fa-minus" aria-hidden="true"></i>
        </button>
        <span class="c-cartItem__quantityText">
          {{ item.quantity }}
        </span>
        <button class="c-cartItem__quantityButton o-flexColumn">
          <i class="c-cartItem__quantityIcon fas fa-plus" aria-hidden="true"></i>
        </button>
      </div>
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
    },
    changeItem(action) {
      let { id, quantity } = this.item;
      switch(action) {
        case "add":
          quantity += 1
          break;
        case "remove":
          quantity -= 1;
          break
        case "clear":
          quantity = 0
      }
      this.changeCart({[id]: quantity})
    }
  },
  methods: {
    ...mapActions('cart', ['changeCart'])
  },
}
</script>