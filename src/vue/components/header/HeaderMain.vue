<template>
  <nav class="c-headerMain">
    <div class="c-headerMain__inner">
      <a class="c-headerMain__logo" 
        href="/" 
        v-html="logo"
      />
      <slot />
    </div>
  </nav>
</template>

<script>
import { logo } from '@vue/assets/svg'

export default {
  data: () => ({
    logo,
  }),
}
</script>

<style scoped>
@import 'settings/index';
@import 'tools/index';

.c-headerMain {
  @mixin show-tablet;
  padding-top: 36px;
  width: 100%;
  background-color: white;
  @media(--desktop) {
    padding-top: 0;
  }
}

.c-headerMain__inner {
  position: relative;
  @mixin container-large;
  @mixin flex column, center, center;
  @media(--desktop) {
    @mixin flex row, space-between, center;
  }
}

.c-headerMain__logo {
  width: 140px;
  min-width: 140px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media(--desktop) {
    margin-top: 0;
  }
}

</style>
