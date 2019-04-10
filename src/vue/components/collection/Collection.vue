<template>
  <div>HELLO WORLD</div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    collection_handle: {
      type: String,
      default: "all-products"
    }
  },
  async mounted() {
    axios.get(`/collections/${this.collection_handle}-json`)
      .then(response => {
        const { data } = response
        const collectionJSON = data.split("<json-data>")[1].split("</json-data>")[0]
        console.log(JSON.parse(collectionJSON))
      })
  }
}
</script>