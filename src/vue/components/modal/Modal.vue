<template lang="html">
  <div class="c-modal o-flexColumn" v-if="prerender || contentId">
    <transition name="overlay-fade">
      <div v-if="contentId" class="c-overlay" />
      <Overlay v-if="contentId" />
    </transition>
    <ModalBox
      @closeClick="setModal"
      :contentId="contentId" 
      :setClickEvents="setClickEvents"
    >
      <slot />
    </ModalBox>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import ModalBox from './ModalBox.vue'

export default {
  props: {
    prerender: {
      type: Boolean,
      default: false
    },
    contentId: {
      type: [Boolean, String],
      default: false
    }
  },
  components: {
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
    document.getElementById("modal").appendChild(this.$el);
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