<template>
  <form 
    v-if="activeVariant"
    :class="`${class_name}__form o-flexColumn`"
  >
    <ProductPrices
      :class_name="class_name"
      :item="activeVariant"
      :show_range="true"
    />
    <div 
      v-for="(select, key, index) in productSelects"
      :key="index"
      :class="`${class_name}__select o-flexRow`"
    >
      <label 
        :class="`${class_name}__selectLabel`"
        :for="product.options[index].toLowerCase() + 'Select'"
      >
        {{ product.options[index] }}
      </label>
      <select 
        v-model="form['option' + (index + 1)]"
        :id="product.options[index].toLowerCase() + 'Select'" 
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
    <div 
      :class="`${class_name}__select o-flexRow`"
    >
      <label 
        :class="`${class_name}__selectLabel`"
        for="quantitySelect"
      >
        {{ quantity_label }}
      </label>
      <select 
        v-model="form.quantity"
        id="quantitySelect"
        :class="`${class_name}__selectInner`"
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
      :class="`${class_name}__button c-button-small c-button--submit`"
      @click="addToCart"
      type="button"
    >
      {{ button_active_text }}
    </button>
    <button 
      v-else
      :class="`${class_name}__button c-button-large c-button--cancel`"
      disabled="disabled"
    >
      {{ button_disabled_text }}
    </button>
  </form>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import { formatProduct, productOptions, productVariant } from "@vue/helpers";
import ProductPrices from "./ProductPrices.vue"

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
  components: {
    ProductPrices
  },
  props: {
    product: {
      type: [String, Object],
      default: () => {}
    },
    class_name: {
      type: [String, Boolean],
      default: false
    },
    quantity_label: {
      type: String,
      default: 'Quantity'
    },
    button_active_text: {
      type: String,
      default: 'Add to Cart'
    },
    button_disabled_text: {
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
        const cartVariant = this.$store.getters['cart/cartVariant'](this.activeVariant.id)
        const quantityInCart = cartVariant ? cartVariant.quantity : 0
        const { inventory_management, inventory_quantity } = this.activeVariant
        let availableQuantity = 10;
        if(inventory_management === "shopify") {
          availableQuantity = inventory_quantity - quantityInCart
        }
        return availableQuantity > 10 ? 10 : availableQuantity
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