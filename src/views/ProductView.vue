<template>
  <div class="product-view">
    <div class="container">
      <div class="row">
        <div class="column -size-6">
          <ProductGallery v-if="product.images" :images="product.images" />
        </div>
        <div class="column -size-6">
          <h1 class="product-view__title">{{ product.name }}</h1>
          <p class="product-view__reference">{{ product.sku }}</p>
          <div class="product-view__description" v-html="product.description" />
          <p class="product-view__price">{{ product.price }}€</p>
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
      product: {}
    }
  },

  async mounted () {
    const response = await client.get(import.meta.env.VITE_WP_API_URL + '/wc/v3/products?slug=' + this.$route.params.product)
    this.product = response.data[0]
  },

  methods: {
    addToCart () {
      this.$store.commit('add', this.product)
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
