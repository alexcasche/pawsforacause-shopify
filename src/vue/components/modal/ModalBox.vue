<template>
  <div class="c-modal__box">
    <button class="c-modal__close" 
      @click="$emit('closeClick')"
    >
      <i class="c-modal__closeIcon fa fa-times" aria-hidden="true"></i>
    </button>
    <div class="c-modal__content" id="modalContent">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentId: {
      type: String,
      default: false,
    },
    setClickEvents: {
      type: Function,
      default: () => {}
    }
  },
  mounted() {
    const modalContent = document.getElementById("modalContent");
    modalContent.childNodes.forEach(child => child.classList.add("u-hidden"));
    document.getElementById(this.contentId).classList.remove("u-hidden");
    modalContent.classList.remove("u-hidden");
    this.setClickEvents();
  }
}
</script>