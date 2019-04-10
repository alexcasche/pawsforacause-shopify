<template>
  <div>HELLO WORLD</div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    collection: {
      type: String,
      default: "all-products"
    }
  },
  async mounted() {
    const collectionJSON = await axios.get(`/collections/${this.collection}-json`)
    console.log(collectionJSON)
  }
}
</script>