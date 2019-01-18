<template>
  <header id="header" class="c-header">
    <HeaderBar/>
    <HeaderMain>
      <HeaderMenu :menu="menu" />
      <HeaderAccount :user="user" />
    </HeaderMain>
  </header>
</template>

<script>
import HeaderBar from './HeaderBar.vue'
import HeaderMain from './HeaderMain.vue'
import HeaderMenu from './HeaderMenu.vue'
import HeaderAccount from './HeaderAccount.vue'

export default {
  props: {
    user: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    HeaderBar,
    HeaderMain,
    HeaderMenu,
    HeaderAccount
  },
}
</script>

<style scoped>
@import 'settings/index';
@import 'tools/index';

.c-header {
  position: relative;
  @mixin flex column, flex-start, flex-start;
  box-shadow: $box-shadow-header;
}
</style>


