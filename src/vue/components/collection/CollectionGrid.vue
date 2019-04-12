<template>
  <div class="c-collectionGrid o-lost">
    <CollectionItem 
      v-for="(item, index) in collection"
      :key="index"
      :item="item"
    />
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
