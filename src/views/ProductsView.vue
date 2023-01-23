<template>
  <div class="products-view">
    <div class="container">
      <div class="products-wrapper">
        <h2 class="home__subtitle">Liste des produits</h2>
        <div class="row">
          <div class="column -size-3">
            <!-- Filtres -->
            <input type="range" min="0" max="2000" v-model="price">
            <br>
            prix: {{ price }}
            <br>
            <input type="checkbox" id="cuisine" value="cuisine" v-model="categories">
            <label for="cuisine">Cuisine</label>
            <br>
            <input type="checkbox" id="chambre" value="chambre" v-model="categories">
            <label for="chambre">Chambre</label>
            <br>
            {{ categories }}
          </div>
          <div class="column -size-9">
            <div class="products-list || row">
              <div v-for="(product, index) in filteredProducts" class="products-item || column -size-3">
                <Product v-bind="{ slug: product.slug, name: product.name, description: product.description, price: product.price, images: product.images }" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { client } from "@/utils/axios"
import Product from "@/components/Product.vue"

export default {
  components: { Product },

  data () {
    return {
      products: [],
      categories: [],
      price: 2000
    }
  },

  computed: {
    filteredProducts () {
      // If true, returned in new array filteredProducts
      return this.products.filter((product) => {
        // WordPress returns a string price -> convert it to number
        const hasLowerPrice = parseInt(product.price) < this.price

        // this.categories is empty -> only filter by price
        if (!this.categories.length) return hasLowerPrice
        
        // this.categories is not empty -> filter by price AND categories
        return hasLowerPrice && product.categories.find((productCategory) => {
          return this.categories.includes(productCategory.slug)
        })
      })
    }
  },

  async mounted () {
    // Request products
    const productsResponse = await client.get(import.meta.env.VITE_WP_API_URL + '/wc/v3/products')
    this.products = productsResponse.data
  }
}
</script>

<style lang="scss">

</style>
