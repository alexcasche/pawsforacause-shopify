<template>
  <div class="v-modalBox">
    <button class="v-modalBox__close" 
      @click="$emit('closeClick')"
    >
      <i class="v-modalBox__closeIcon fa fa-times" aria-hidden="true"></i>
    </button>
    <div class="v-modalBox__content" id="modalContent">
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

<style scoped>
@import "settings/index.css";
@import "tools/index.css";

.v-modalBox {
  padding: 40px;
  background-color: $bg-gray-light;
  @media(--mobile) {
    position: relative;
    max-width: 750px;
    margin: 0 auto;
    border-radius: $border-radius-card;
    border: 1px solid #d3d3d3;
    box-shadow: $box-shadow-modal;
  }
  @media(--mobile-max) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 60px 40px 40px;
    overflow-y: scroll;
  }
}
.v-modalBox__close {
  @mixin button-circle;
  background-color: #bbb;
  position: absolute;
  top: 30px;
  right: 40px;
  width: 30px;
  height: 30px;
  &:hover {
    background-color: #aaa;
  }
}
.v-modalBox__closeIcon {
  pointer-events: none;
}
</style>