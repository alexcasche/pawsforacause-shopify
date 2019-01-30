<template>
  <div class="v-loading">
    <span /><span /><span />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import "settings/index.css";

.v-loading {
  display: flex;
  justify-content: center;
  & > span {
    width: 10px;
    height: 10px;
    animation: expandBubbles .85s ease-in-out infinite;
    &:nth-child(2) {
      animation-delay: 180ms;
    }
    &:nth-child(3) {
      animation-delay: 360ms;
    }
    &:nth-child(4) {
      animation-delay: 540ms;
    }
  }
  @keyframes expandBubbles {
    0% {
      transform: scale(1);
      background-color: $color-blue-lightest;
    }
    25% {
      transform: scale(1.55);
      background-color: $color-blue;
    }
  }
}
</style>