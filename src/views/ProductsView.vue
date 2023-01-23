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
            <div v-if="paginatedProducts.length" class="products-list || row">
              <div v-for="(product, index) in paginatedProducts" class="products-item || column -size-3">
                <Product v-bind="{ slug: product.slug, name: product.name, description: product.description, price: product.price, images: product.images }" />
              </div>
            </div>
            <div v-else>
              Aucun produit ne correspond à vos critères
            </div>
            <div class="products-view__pagination">
              Page courante : {{ page }}
              <br>
              <div class="products-view__pagination-control">
                <button @click="changePage(page - 1)">Page précédente</button>
                <span class="products-view__page-index" v-for="index in pagesCount" @click="changePage(index - 1)">[ {{ index }} ]</span>
                <button @click="changePage(page + 1)">Page suivante</button>
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
      page: 0,
      byPage: 2,
      price: 2000,
      categories: []
    }
  },

  watch: {
    categories: 'resetPage',
    price: function(newValue, oldValue) {
      this.resetPage()
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
    },

    paginatedProducts () {
      // page 0 // page 1 // page 2
      // (0, 3) -> (3, 6) -> (6, 9)
      return this.filteredProducts.slice(this.page * this.byPage, (this.page + 1) * this.byPage)
    },

    pagesCount () {
      return Math.ceil(this.filteredProducts.length / this.byPage)
    }
  },

  async mounted () {
    // Request products
    const productsResponse = await client.get(import.meta.env.VITE_WP_API_URL + '/wc/v3/products')
    this.products = productsResponse.data
  },

  methods: {
    changePage (index) {
      // If not first and not last page
      if (index >= 0 && index <= this.pagesCount - 1) {
        this.page = index
      }
    },

    resetPage () {
      this.changePage(0)
    }
  }
}
</script>

<style lang="scss">
.products-view {
  &__pagination {
    margin-top: 50px;
  }

  &__pagination-control {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  &__page-index {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    cursor: pointer;
  }
}
</style>
