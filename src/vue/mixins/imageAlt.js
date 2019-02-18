export const imageAlt = {
  methods: {
    imageAlt(product) {
      const { name } = window.theme.shop
      return `${name} ${product.title}`
    }
  }
}