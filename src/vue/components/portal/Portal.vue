<template>
  <portal-target :name="name"></portal-target>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>