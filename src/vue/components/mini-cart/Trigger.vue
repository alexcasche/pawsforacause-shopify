<template>
  <a class="c-trigger" @click="setDrawer('open')">
    <i class="c-trigger__icon fas fa-shopping-cart"></i>
    <span class="c-trigger__text">0 Items In Cart</span>
    <span class="c-trigger__badge">0</span>
  </a>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations("miniCart", ["setDrawer"])
  }
};
</script>

<style scoped>
@import "settings/index.css";
@import "tools/index.css";

.c-trigger {
  display: block;
  @mixin button;
  @mixin button-small;
  @mixin button-blue-dark;
  text-transform: capitalize;
  @media (--tablet) {
    padding: 12px 20px;
    border-radius: 5px;
  }
}
.c-trigger__icon {
  margin-right: 8px;
}
.c-trigger__text {
  @mixin show-tablet;
}
.c-trigger__badge {
  @mixin hide-tablet;
}
</style>

