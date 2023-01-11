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
    <div v-if="showroomTitle" class="showroom-section">
      <Showroom :title="showroomTitle" :images="showroomImages" />
    </div>
  </main>
</template>

<script>
import Product from '@/components/Product.vue'
import {client} from "@/utils/axios"
import Categories from "@/components/Categories.vue"
import Showroom from "@/components/Showroom.vue"
export default {
  components: {
    Showroom,
    Categories,
    Product
  },

  data () {
    return {
      posts: [],
      products: [],
      pageData: {},
      count: 0
    }
  },

  computed: {
    formattedDate () {
      return new Date(this.pageData.date).toLocaleDateString()
    },

    counterText () {
      return `Cliqué ${this.count} fois`
    },

    showroomTitle () {
      if (!this.pageData.acf) return
      return this.pageData.acf.title
    },

    showroomImages () {
      if (!this.pageData.acf) return
      return [this.pageData.acf.images.left_image, this.pageData.acf.images.right_image]
    }
  },

  async mounted () {
    // Request products
    const productsResponse = await client.get(import.meta.env.VITE_WP_API_URL + '/wc/v3/products')
    this.products = productsResponse.data

    const pageResponse = await client.get(import.meta.env.VITE_WP_API_URL + '/wp/v2/pages/29')
    this.pageData = pageResponse.data
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

.showroom-section {
  margin-top: 100px;
}
</style>
