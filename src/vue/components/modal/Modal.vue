<template lang="html">
  <div class="u-hidden" id="modal">
    <transition name="overlay-fade">
      <Overlay v-if="contentId" />
    </transition>
    <div class="c-modal">
      <ModalBox
        @closeClick="setModal"
        :contentId="contentId" 
        :setClickEvents="setClickEvents"
      >
        <slot />
      </ModalBox>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Overlay from '../shared/Overlay.vue'
import ModalBox from './ModalBox.vue'

export default {
  components: {
    Overlay,
    ModalBox,
  },
  computed: {
    ...mapState({ cartOpen: state => state.cart.isOpen }),
    ...mapGetters('modal', ['contentId'])
  },
  methods: {
    ...mapMutations('modal', ['setModal']),
    setClickEvents() {
      const modalTriggers = document.querySelectorAll(".trigger-modal");
      modalTriggers.forEach(trigger => trigger.addEventListener('click', () => {
        this.setModal(event.target.dataset.modalContentId);
      }));
    }
  },
  watch: {
    contentId: {
      handler(val) {
        if(val) {
          document.getElementById("modal").classList.remove("u-hidden");
          document.body.classList.add("u-noScroll");
        }
        if(!val) {
          document.getElementById("modal").classList.add("u-hidden");
          if(!this.cartOpen) {
            document.body.classList.remove("u-noScroll");
          }
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
.overlay-fade-enter,
.overlay-fade-leave-to {
  opacity: 0;
}
.overlay-fade-leave,
.overlay-fade-enter-to {
  opacity: 1;
}
</style>