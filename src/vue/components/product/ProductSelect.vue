<template>
  <form 
    v-if="activeVariant"
    :class="class_prefix + 'form o-flexColumn'"
  >
    <span 
      :class="class_prefix + 'prices o-flexRow'"
      v-html="pricesHtml(activeVariant, 'variant', class_prefix)"
    />
    <div 
      v-for="(select, key, index) in productSelects"
      :key="index"
      :class="class_prefix + 'select o-flexRow'"
    >
      <label 
        :class="class_prefix + 'selectLabel'"
        :for="product.options[index].toLowerCase() + 'Select'"
      >
        {{ product.options[index] }}
      </label>
      <select 
        v-model="form['option' + (index + 1)]"
        :id="product.options[index].toLowerCase() + 'Select'" 
        :class="class_prefix + 'selectInner'"
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
      :class="class_prefix + 'select o-flexRow'"
    >
      <label 
        :class="class_prefix + 'selectLabel'"
        for="quantitySelect"
      >
        {{ quantity_label }}
      </label>
      <select 
        v-model="form.quantity"
        id="quantitySelect"
        :class="class_prefix + 'selectInner'"
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
      :class="class_prefix + 'button c-button-small c-button--submit'"
      @click="addToCart"
      type="button"
    >
      {{ button_text }}
    </button>
    <button 
      v-else
      :class="class_prefix + 'button c-button-large c-button--cancel'"
      disabled="disabled"
    >
      {{ sold_out_text }}
    </button>
  </form>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { formatProduct, productOptions, productVariant } from "@vue/helpers";

export default {
  data() {
    return {
      activeVariant: false,
      updateVariant: false,
      form: {
        option1: '',
        option2: '',
        option3: '',
        quantity: ''
      }
    }
  },
  props: {
    product: {
      type: [String, Object],
      default: () => {}
    },
    class_prefix: {
      type: String,
      default: 'c-productSelect__'
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
    productObject() {
      return typeof this.product === 'object'
    },
    productSelects() {
      return this.productObject ? productOptions(this.product) : false
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
    optionsWatch() {
      const { option1, option2, option3 } = this.form
      return `${option1}${option2}${option3}`
    }
  },
  watch: {
    optionsWatch: {
      handler(val) {
        if(this.updateVariant) this.activeVariant = productVariant(this.product, this.form)
        else this.updateVariant = true
      }
    },
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
      this.addCart({ id: this.activeVariant.id, quantity: this.form.quantity })
      this.setAdd(false);
    }
  },
  mounted() {
    if(!this.productObject) {
      const formattedProduct = formatProduct(JSON.parse(this.product))
      this.product = formattedProduct[Object.keys(formattedProduct)[0]]
    }
    const { variants } = this.product
    const variantKeys = Object.keys(variants)
    const firstAvailable = variantKeys.find(key => variants[key].available)
    this.activeVariant = firstAvailable ? variants[firstAvailable] : variants[variantKeys[0]]
    const options = ["option1", "option2", "option3"];
    options.forEach(option => {
      if(this.activeVariant[option]) {
        this.form[option] = this.activeVariant[option]
      }
    })
    if(this.activeQuantity) this.form.quantity = 1
    else this.form.quantity = '--'
  }
}
</script>