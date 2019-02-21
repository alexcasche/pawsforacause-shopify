<template>
  <div 
    v-if="activeVariant"
    :class="classPrefix + 'form o-flexColumn'"
  >
    <span 
      :class="classPrefix + 'prices o-flexRow'"
      v-html="pricesHtml(activeVariant, 'variant', classPrefix)"
    />
    <div 
      v-for="(select, key, index) in productSelects"
      :key="index"
      :class="classPrefix + 'select o-flexRow'"
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
        >
          {{ option }}
        </option>
      </select>
    </div>
    <div 
      :class="classPrefix + 'select o-flexRow'"
    >
      <label 
        :class="classPrefix + 'selectLabel'"
        for="quantitySelect"
      >
        {{ quantity_label }}
      </label>
      <select 
        v-model="form.quantity"
        id="quantitySelect"
        :class="classPrefix + 'selectInner'"
      >
        <option 
          v-for="n in activeQuantity"
          :key="n"
          :value="n"
        >
          {{ n }}
        </option>
        <option v-if="!activeQuantity"
          value="--"
        >
          --
        </option>
      </select>
    </div>
    <button 
      v-if="activeQuantity > 0"
      :class="classPrefix + 'button c-button-small c-button--submit'"
      @click="addToCart"
    >
      {{ button_text }}
    </button>
    <button 
      v-else
      :class="classPrefix + 'button c-button-large c-button--cancel'"
      disabled="disabled"
    >
      {{ sold_out_text }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { productOptions, productVariant } from "@vue/helpers";

export default {
  data() {
    return {
      form: {
        option1: '',
        option2: '',
        option3: '',
        quantity: ''
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
    },
    sold_out_text: {
      type: String,
      default: 'Sold Out'
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
  watch: {
    activeQuantity: {
      handler(val) {
        if(val === 0) this.form.quantity = "--"
        else this.form.quantity = 1
      }
    }

  },
  methods: {
    ...mapMutations('cart', ['setAdd']),
    ...mapActions('cart', ['addCart']),
    addToCart() {
      this.setAdd(false);
      this.addCart({ id: this.activeVariant.id, quantity: this.form.quantity })
    }
  },
  mounted() {
    const options = ["option1", "option2", "option3"];
    options.forEach(option => {
      if(this.productSelects[option]) {
        this.form[option] = this.productSelects[option].options[0]
      }
    })
    if(this.activeQuantity) this.form.quantity = 1
    else this.form.quantity = '--'
  }
}
</script>