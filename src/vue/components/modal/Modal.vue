<template lang="html">
  <div class="v-modal u-hidden" id="modal">
    <Overlay @overlayClick="toggleModal" v-if="isOpen" :isOpen="isOpen" />
    <div class="v-modal__container">
      <Box @closeClick="toggleModal" v-if="isOpen" :contentId="contentId">
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
    const modalTriggers = document.querySelectorAll(".trigger-modal");
    modalTriggers.forEach(trigger => trigger.addEventListener('click', this.setModal));
  }
}
</script>

<style scoped>
.v-modal__container {
  position: relative;
  padding: 100px 0;
}
</style>