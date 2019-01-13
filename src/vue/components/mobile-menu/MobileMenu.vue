<template lang="html">
  <div class="c-mobileMenu">
    <portal to="mobile-menu-trigger">
      <Trigger @toggleMenu="toggleMenu" />
    </portal>
    <Overlay :isOpen="isOpen" @toggleMenu="toggleMenu" />
    <Menu @toggleMenu="toggleMenu" />
  </div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'
import Trigger from './Trigger.vue'
import Overlay from './Overlay.vue'
import Menu from './Menu.vue'

export default {
  components: {
    Trigger,
    Overlay,
    Menu,
  },
  computed: {
    ...mapGetters('mobileMenu', ['isOpen']),
  },
  methods: {
    ...mapMutations('mobileMenu', ['toggleMenu']),
  },
  watch: {
    isOpen(val) {
      const page = document.getElementById('vue')
      if (val === true) {
        page.classList.add('c-vue--mobileMenuOpen')
      } else {
        page.classList.remove('c-vue--mobileMenuOpen')
      }
    },
  },
}
</script>