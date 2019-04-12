<template>
  <div id="contact-us" class="c-collection">
    <div v-if="!isLoading">
      <CollectionGrid :collection="collectionItems"/>
    </div>
    <div v-else class="c-collection__loading c-loadingDots">
      <span/><span/><span/><span/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations, mapActions } from "vuex"
import CollectionGrid from "./CollectionGrid.vue"

export default {
  props: {
    collection_handle: {
      type: String,
      default: "all-products"
    }
  },
  components: {
    CollectionGrid
  },
  computed: {
    ...mapGetters('collection', ['activeCollection', 'sortBy', 'filterBy', 'isLoading']),
    collectionItems() {
      return this.activeCollection;
    }
  },
  methods: {
    ...mapMutations('collection', ['setCollection', 'setSortBy', 'setFilterBy', 'toggleLoading']),
    ...mapActions('collection', ['setActiveCollection']),
  },
  async mounted() {
    await this.setCollection(this.collection_handle)
    await this.setSortBy()
    await this.setFilterBy()
    await this.setActiveCollection()
    this.toggleLoading()
  }
}
</script>