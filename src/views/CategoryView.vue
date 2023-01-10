<template>
  <main class="category-view">
    <div class="container">
      <div class="products-list || row">
        <div v-for="(product, index) in products" class="products-item || column -size-3">
          <Product v-bind="product" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Product from "@/components/Product.vue"
import { client } from "@/utils/axios"

export default {
  components: {
    Product
  },

  data () {
    return {
      products: []
    }
  },

  async mounted () {
    this.products = await this.getProducts()
  },

  // To switch between categories routes
  async beforeRouteUpdate () {
    this.products = await this.getProducts()
  },

  methods: {
    async getProducts () {
      // Get $route dynamic parameter
      const routeParam = this.$route.params.category

      // Get axios response to get current category
      const categoryResponse = await client.get(import.meta.env.VITE_WP_API_URL + '/wc/v3/products/categories?slug=' + routeParam)
      const [category] = categoryResponse.data

      // Get axios response to get products with current category
      const productsResponse = await client.get(import.meta.env.VITE_WP_API_URL + '/wc/v3/products?category=' + category.id)
      return productsResponse.data
    }
  }
}
</script>

<style lang="scss">

</style>
