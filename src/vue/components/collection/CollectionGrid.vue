<template>
  <div class="c-collectionGrid o-lost">
    <div class="c-collectionGrid__item o-lost-item"
      v-for="(item, index) in collection"
      :key="index"
    >
      <CollectionItem :item="item"/>
    </div>
  </div>
</template>

<script>
import CollectionItem from "./CollectionItem.vue"

export default {
  props: {
    collection: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CollectionItem
  }
}
</script>
