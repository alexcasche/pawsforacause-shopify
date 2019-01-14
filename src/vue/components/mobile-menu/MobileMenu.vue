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
      const view = document.getElementById('view')
      const body = document.body
      if (val === true) {
        view.classList.add('c-view--mobileMenuOpen')
        body.style.overflowY = 'hidden'
      } else {
        view.classList.remove('c-view--mobileMenuOpen')
        body.style.overflowY = 'scroll'
      }
    },
  },
}
</script>

<style scoped>
.c-mobileMenu {
  opacity: 0;
  transition: opacity;
  transition-delay: 0.35s;
}
.c-mobileMenu--open {
  opacity: 1;
  transition-delay: 0s;
}
</style>