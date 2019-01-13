<template lang="html">
  <div :class="menuClass">
    <portal to="mobile-menu-trigger">
      <Trigger @toggleMenu="toggleMenu" />
    </portal>
    <Overlay :isOpen="isOpen" @toggleMenu="toggleMenu" />
    <Menu @toggleMenu="toggleMenu">
      <slot />
    </Menu>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'
import Trigger from './Trigger.vue'
import Overlay from './Overlay.vue'
import Menu from './Menu.vue'

export default {
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Trigger,
    Overlay,
    Menu,
  },
  computed: {
    ...mapGetters('mobileMenu', ['isOpen']),
    menuClass() {
      const openClass = this.isOpen ? ' c-mobileMenu--open' : ''
      return `c-mobileMenu${openClass}`
    },
  },
  methods: {
    ...mapMutations('mobileMenu', ['toggleMenu']),
  },
  watch: {
    isOpen(val) {
      const vue = document.getElementById('vue')
      const body = document.body
      if (val === true) {
        vue.classList.add('c-vue--mobileMenuOpen')
        body.style.overflowY = 'hidden'
      } else {
        vue.classList.remove('c-vue--mobileMenuOpen')
        body.style.overflowY = 'scroll'
      }
    },
  },
}
</script>

<style>
.c-mobileMenu {
  opacity: 0;
}
.c-mobileMenu--open {
  opacity: 1;
}
</style>