<template lang="html">
  <div class="c-mobileMenu">
    <portal to="mobile-menu-trigger">
      <Trigger />
    </portal>
  </div>
</template>

<script>
import Trigger from './Trigger.vue'

export default {
  components: {
    Trigger,
  },
}
</script>