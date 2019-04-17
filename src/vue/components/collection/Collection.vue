<template>
  <div class="c-collection o-strip">
    <div class="c-collection__container o-container--large">
      <div v-if="isLoading" class="c-collection__loading c-loadingDots">
        <span/><span/><span/><span/>
      </div>
      <CollectionGrid v-else :collection="activeCollection" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapMutations, mapActions } from "vuex"
import { objectEmpty } from "@vue/utils"
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
    ...mapGetters('collection', ['activeCollection', 'isLoading']),
  },
  methods: {
    ...mapMutations('collection', ['setCollection', 'setSortBy', 'setFilterBy', 'toggleLoading']),
    ...mapActions('collection', ['setActiveCollection', 'setOtherCollections']),
  },
  watch: {
    activeCollection: {
      async handler(val) {
        this.toggleLoading()
        if(!val) await this.setActiveCollection()
        this.toggleLoading()
      }
    }
  },
  async mounted() {
    await this.setCollection(this.collection_handle)
    await this.setSortBy()
    await this.setFilterBy()
    await this.setActiveCollection()
    const sortSelect = document.getElementById("navbar-sort")
    const filterSelect = document.getElementById("navbar-filter")
    if(sortSelect) sortSelect.addEventListener("change", this.setSortBy)
    if(filterSelect) filterSelect.addEventListener("change", this.setFilterBy)
    this.toggleLoading()
    this.setOtherCollections()
  }
}
</script>