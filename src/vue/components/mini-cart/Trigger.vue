<template>
  <button :class="triggerClass" @click="setDrawer('open')">
    <i v-if="trigger !== 'footer'" class="c-triggerHeader__icon fas fa-shopping-cart"></i>
    <span
      v-if="trigger === 'headerMain'"
      class="c-triggerHeader__text"
    >{{ cartCount }} {{ cartMessage }}</span>
    <span v-if="trigger === 'headerMobile'" class="c-triggerHeader__badge">{{ cartCount }}</span>
    <span v-if="trigger === 'footer'" class="c-triggerFooter__heading">Shopping Cart</span>
    <span v-if="trigger === 'footer'" class="c-triggerFooter__text">{{ cartMessage }}</span>
  </button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    trigger: {
      type: 'String',
      default: 'headerMain',
    },
  },
  computed: {
    ...mapGetters('miniCart', ['cartCount']),
    triggerClass() {
      return `c-trigger c-trigger--${this.trigger}`
    },
    cartMessage() {
      let message = this.cartCount === 1 ? 'Item' : 'Items'
      if ((this.trigger = 'headerMain')) {
        return `${message} In Cart`
      }
      return message
    },
  },
  methods: {
    ...mapMutations('miniCart', ['setDrawer']),
  },
}
</script>

<style scoped>
@import 'settings/index.css';
@import 'tools/index.css';

.c-trigger--headerMain {
  display: block;
  @mixin button;
  @mixin button-small;
  @mixin button-blue-dark;
  text-transform: capitalize;
  @media (--tablet) {
    padding: 12px 20px;
    border-radius: 5px;
  }
  .c-triggerHeader__icon {
    margin-right: 8px;
  }
}

.c-trigger--headerMobile {
  @mixin button;
  @mixin flex row, center, center;
  @mixin transition-opacity;
  position: relative;
  height: 38px;
  width: 38px;
  padding: 0;
  .c-triggerHeader__icon {
    margin-right: 10px;
    color: $color-black;
    font-size: 18px;
  }
  .c-triggerHeader__badge {
    @mixin flex row, center, center;
    position: absolute;
    top: 2px;
    right: 5px;
    width: 15px;
    height: 15px;
    background-color: $color-blue;
    border-radius: 50%;
    color: white;
    font-size: 8px;
    font-weight: 700;
  }
}
</style>

