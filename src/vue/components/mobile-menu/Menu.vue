<template>
  <div class="c-menu">
    <h1 class="c-menu__heading">Mobile Menu</h1>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('mobileMenu', ['toggleMenu']),
  },
}
</script>


<style scoped>
.c-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -100;
  width: 300px;
  background-color: white;
  overflow-y: scroll;
}
</style>