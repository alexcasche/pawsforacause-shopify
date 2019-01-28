<template>
  <div class="v-box">
    <button class="v-box__close" @click="$emit('closeClick')">
      <i class="v-box__closeIcon fa fa-times" aria-hidden="true"></i>
    </button>
    <div class="v-box__content" id="modalContent">
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
  },
  methods: {
    hideChildren() {
      
    },
    renderContent(id) {

    }
  },
  mounted() {
    const modalContent = document.getElementById("modalContent");
    modalContent.childNodes.forEach(child => child.classList.add("u-hidden"));
    document.getElementById(this.contentId).classList.remove("u-hidden");
    modalContent.classList.remove("u-hidden");
  }
}
</script>

<style scoped>
@import "settings/index.css";
@import "tools/index.css";

.v-box {
  padding: 60px 40px 40px;
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
.v-box__close {
  @mixin button-circle;
  color: $color-black-light;
  border: 1px solid $color-black-light;
  position: absolute;
  top: 30px;
  right: 40px;
  width: 30px;
  height: 30px;
  &:hover {
    color: $color-blue-dark;
    border-color: $color-blue-dark;
  }
}
.v-box__closeIcon {
  pointer-events: none;
}
/* .v-box__buttons {
  margin-top: 30px;
  @mixin flex column, flex-start, center;
  @media(--mobile) {
    @mixin flex row, flex-end, center;
  }
}
.v-box__button {
  margin-bottom: 20px;
  @media(--mobile) {
    margin-left: 15px;
  }
} */
</style>