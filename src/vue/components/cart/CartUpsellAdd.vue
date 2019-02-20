<template>
  <div class="c-cartUpsellAdd">
    <button @click="setAdd(false)"
      class="c-cartUpsellAdd__close o-flexColumn" 
    >
      <i class="c-cartUpsellAdd__closeIcon fa fa-times" aria-hidden="true"></i>
    </button>
    SHOWING {{ item.id }}
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    ...mapMutations('cart', ['setAdd']),
  }
}
</script>
