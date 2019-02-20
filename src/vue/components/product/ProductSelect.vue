<template>
  <div 
    :class="classPrefix + 'form o-flexColumn'"
  >
    <span 
      :class="classPrefix + 'prices o-flexRow'"
      v-html="pricesHtml(item, 'product', classPrefix)"
    />
    <div 
      v-for="(select, index) in productSelects"
      :key="index"
      :class="classPrefix + 'select'"
    >
      <select :class="classPrefix + 'selectInner'">
        <option 
          v-for="(option, index) in select.options"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
    <button :class="classPrefix + 'button c-button-small c-button--submit'">
      {{ button_text }}
    </button>
  </div>
</template>

<script>
import { productOptions } from "@vue/helpers";

export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    classPrefix: {
      type: String,
      default: 'c-productSelect'
    },
    quantity_label: {
      type: String,
      default: 'Quantity'
    },
    button_text: {
      type: String,
      default: 'Add to Cart'
    }
  },
  computed: {
    productSelects() {
      return productOptions(this.item);
    }
  }
}
</script>