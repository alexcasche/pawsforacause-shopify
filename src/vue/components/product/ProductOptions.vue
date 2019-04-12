<template>
  <div v-if="showOptions"
    :class="`${class_name}__options`"
  >
    <div 
      v-for="(select, key, index) in selects"
      :key="index"
      :class="`${class_name}__select o-flexRow`"
    >
      <label 
        :class="`${class_name}__selectLabel`"
        :for="select.title.toLowerCase() + 'Select'"
      >
        {{ select.title }}
      </label>
      <select 
        v-model="options[index]"
        :id="select.title.toLowerCase() + 'Select'" 
        :class="`${class_name}__selectInner`"
      >
        <option 
          v-for="(option, index) in select.options"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { arraysEqual, formatOptions } from "@vue/utils";

export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    class_name: {
      type: String,
      required: true
    },
    initial_variant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      options: [...this.initial_variant.options],
      selects: formatOptions(this.product)
    }
  },
  computed: {
    activeVariant() {
      const { variants } = { ...this.product }
      const variantIds = Object.keys(variants)
      let variant = variants[variantIds[0]];
      variantIds.forEach(id => {
        if(arraysEqual(this.options, variants[id].options)) {
          variant = variants[id]
        }
      })
      return variant
    },
    showOptions() {
      return this.options[0] === "Default Title" ? false : true
    }
  },
  watch: {
    activeVariant: {
      handler(val) {
        this.$emit('variantChange', val)
      },
      deep: true
    }
  }
}
</script>
