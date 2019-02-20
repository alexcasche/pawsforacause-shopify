export const imageUrl = {
  methods: {
    imageUrl(url, ext, size) {
      const parts = url.split(ext)
      return `${parts[0]}_${size}${ext}${parts[1]}`;
    }
  }
}