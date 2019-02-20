<template>
  <div 
    v-if="activeVariant"
    :class="classPrefix + 'form o-flexColumn'"
  >
    <span 
      :class="classPrefix + 'prices o-flexRow'"
      v-html="pricesHtml(item, 'product', classPrefix)"
    />
    <div 
      v-for="(select, key, index) in productSelects"
      :key="index"
      :class="classPrefix + 'select o-flexRow' + index"
    >
      <label 
        :class="classPrefix + 'selectLabel'"
        :for="item.options[index] + 'Select'"
      >
        {{ item.options[index] }}
      </label>
      <select 
        v-model="form['option' + (index + 1)]"
        :id="item.options[index] + 'Select'" 
        :class="classPrefix + 'selectInner'"
      >
        <option 
          v-for="(option, index) in select.options"
          :key="index"
          :value="option"
          :selected="form['option' + (index + 1)] === option"
        >
          {{ option }}
        </option>
      </select>
    </div>
    <button 
      v-if="activeQuantity > 0"
      :class="classPrefix + 'button c-button-small c-button--submit'"
    >
      {{ button_text }}
    </button>
    <button 
      v-else
      :class="classPrefix + 'button c-button-large c-button--disabled'"
      disabled="disabled"
    >
      Sold Out
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { productOptions, productVariant } from "@vue/helpers";

export default {
  data() {
    return {
      form: {
        option1: '',
        option2: '',
        option3: ''
      }
    }
  },
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
      return productOptions(this.item)
    },
    activeVariant() {
      return productVariant(this.item, this.form)
    },
    activeQuantity() {
      if(this.activeVariant) {
        const { inventory_management, inventory_quantity } = this.activeVariant
        let activeQuantity = 10
        if(inventory_management === "shopify") {
          activeQuantity = inventory_management > 10 ? 10 : inventory_quantity
        }
        return activeQuantity
      }
    },
  },
  methods: {

  },
  mounted() {
    const options = ["option1", "option2", "option3"];
    options.forEach(option => {
      if(this.productSelects[option]) {
        this.form[option] = this.productSelects[option].options[0]
      }
    })
  }
}
</script>