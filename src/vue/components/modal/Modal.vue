<template lang="html">
  <div class="v-modal u-hidden" id="modal">
    <transition name="overlay-fade">
      <Overlay v-if="isOpen" />
    </transition>
    <div class="v-modal__container">
      <Box v-if="isOpen" 
        @closeClick="toggleModal" 
        :contentId="contentId" 
        :setClickEvents="setClickEvents"
      >
        <slot />
      </Box>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Overlay from '../shared/Overlay.vue'
import Box from './Box.vue'

export default {
  components: {
    Overlay,
    Box,
  },
  computed: {
    ...mapState({ cartOpen: state => state.cart.isOpen }),
    ...mapGetters('modal', ['isOpen', 'contentId'])
  },
  methods: {
    ...mapMutations('modal', ['toggleModal', 'setModalContent']),
    setModal(event) {
      this.toggleModal();
      if(this.isOpen) {
        this.setModalContent(event.target.dataset.modalId);
      }
    },
    setClickEvents() {
      const modalTriggers = document.querySelectorAll(".trigger-modal");
      modalTriggers.forEach(trigger => trigger.addEventListener('click', this.setModal));
    }
  },
  watch: {
    isOpen: {
      handler(val) {
        document.getElementById("modal").classList.toggle("u-hidden");
        if(!this.cartOpen) {
          document.body.classList.toggle("u-noScroll");
        }
      }
    },
  },
  mounted() {
    document.body.appendChild(document.getElementById("modal"));
    this.setClickEvents();
  }
}
</script>

<style scoped>
.v-modal__container {
  position: relative;
  padding: 100px 0;
}
.overlay-fade-enter,
.overlay-fade-leave-to {
  opacity: 0;
}
.overlay-fade-leave,
.overlay-fade-enter-to {
  opacity: 1;
}
</style>