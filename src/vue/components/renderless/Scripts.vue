<template></template>

<script>
export default {
  props: {
    scripts: {
      type: String,
      default: ""
    }
  },
  mounted() {
    const scriptArray = this.scripts.split(",");
    scriptArray.forEach(script => {
      import(`@vue/scripts/${script}`)
      .then(fn => {
        console.log(fn);
        fn();
      })
    })
  }
}
</script>


