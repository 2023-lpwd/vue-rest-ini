<template>
  <div class="product-view">
    <div class="container">
      <div class="row">
        <div class="column -size-6">
          <ProductGallery v-if="displayedProduct.images" :images="displayedProduct.images" />
        </div>
        <div class="column -size-6">
          <h1 class="product-view__title">{{ displayedProduct.name }}</h1>
          <p class="product-view__reference">{{ displayedProduct.sku }}</p>
          <div class="product-view__description" v-html="displayedProduct.description" />
          <p class="product-view__price">{{ displayedProduct.price }}€</p>
          <div v-if="colorAttribute" class="product-view__attribute">
            <div v-for="(option, index) in colorAttribute.options" class="product-view__option" @click="changeColor(option)">{{ option }}</div>
          </div>
          <div class="product-view__description">
            <div v-if="displayedProduct.dimensions" class="product-view__dimensions">
              <p class="product-view__subtitle">Dimensions du produit :</p>
              <ul>
                <li class="product-view__dimensions-item">Longueur : {{ displayedProduct.dimensions.length }}cm</li>
                <li class="product-view__dimensions-item">Largeur : {{ displayedProduct.dimensions.width }}cm</li>
                <li class="product-view__dimensions-item">Hauteur : {{ displayedProduct.dimensions.height }}cm</li>
              </ul>
            </div>
            <p class="product-view__subtitle">Description du produit :</p>
            <div class="product-view__description-content" v-html="displayedProduct.short_description" />
          </div>
          <Button :color="'orange'" :label="'Ajouter au panier'" @click="addToCart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import ProductGallery from '@/components/ProductGallery.vue'
import { client } from "@/utils/axios"
export default {
  components: {
    Button,
    ProductGallery
  },

  data () {
    return {
      product: {},
      variations: [],
      activeColor: null,
    }
  },

  computed: {
    colorAttribute () {
      if (!this.product.attributes) return
      return this.product.attributes.find(attribute => attribute.name === 'Couleur')
    },
    displayedProduct () {
      if (!this.activeColor) return this.product
      // Filter variations array to find if there's a match with selected attributes (color)
      const [variation] = this.variations.filter((variation) => {
        return variation.attributes.find(attribute => attribute.option === this.activeColor)
      })
      return variation || this.product
    }
  },

  async mounted () {
    await this.getProductData(this.$route.params.product)
  },
  async beforeRouteUpdate (to, from) {
    await this.getProductData(to.params.product)
  },

  methods: {
    // Get WooCommerce product data by slug
    async getProductData (slug) {
      const response = await client.get(import.meta.env.VITE_WP_API_URL + '/wc/v3/products?slug=' + slug)
      this.product = response.data[0]
      if (this.product.type === 'variable') {
        // Loop through all variation ids
        for await (const id of this.product.variations) {
          const response = await client.get(import.meta.env.VITE_WP_API_URL + '/wc/v3/products/' + id)
          this.variations.push(response.data)
        }
        console.log(this.variations);
      }
    },

    // Add product to cart
    addToCart () {
      this.$store.commit('add', { product: this.displayedProduct, quantity: this.quantity })
    },

    // Update activeColor value
    changeColor (color) {
      this.activeColor = color
    }
  }
}
</script>

<style lang="scss">
.product-view {
  &__title {
    font-size: 40px;
    line-height: 50px;
    font-weight: 700;
  }

  &__reference {
    margin-top: 10px;
  }

  &__description {
    margin-top: 10px;
  }

  &__price {
    font-size: 25px;
    font-weight: 700;
    margin-top: 10px;
  }
}
</style>
