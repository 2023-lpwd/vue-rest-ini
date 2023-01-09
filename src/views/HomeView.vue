<template>
  <main class="home">
    <div class="container">
      <div class="posts-wrapper">
        <div v-for="(post, index) in posts" >
          <Post :title="post.title.rendered" />
        </div>
      </div>


      <div class="products-wrapper">
        <h2 class="home__subtitle">Liste des produits</h2>

        <div class="products-list || row">
          <div v-for="(product, index) in products" class="products-item || column -size-3">
            <Product v-bind="product" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Product from '@/components/Product.vue'
import {client} from "@/utils/axios"
import Categories from "@/components/Categories.vue"
export default {
  components: {
    Categories,
    Product
  },

  data () {
    return {
      posts: [],
      products: []
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
.home {
  &__subtitle {
    font-size: 25px;
    font-weight: 700;
  }
}
.products-wrapper {
  margin-top: 50px;
}
</style>
