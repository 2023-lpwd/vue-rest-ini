<script>
import { RouterLink, RouterView } from 'vue-router'
import Post from '@/components/Post.vue'
import axios from 'axios'

export default {
  components: {
    Post,
    RouterLink,
    RouterView
  },

  data () {
    return {
      posts: [],
      products: [],
      categories: []
    }
  },

  async mounted () {
    const categoriesResponse = await axios.get(import.meta.env.VITE_WP_API_URL + '/wc/v3/products/categories', {
      headers: {
        Authorization: `Basic ${btoa(`${import.meta.env.VITE_WP_USERNAME}:${import.meta.env.VITE_WP_PASSWORD}`)}`
      }
    })
    this.categories = categoriesResponse.data

    const productsResponse = await axios.get(import.meta.env.VITE_WP_API_URL + '/wc/v3/products', {
      headers: {
        Authorization: `Basic ${btoa(`${import.meta.env.VITE_WP_USERNAME}:${import.meta.env.VITE_WP_PASSWORD}`)}`
      }
    })

    this.products = productsResponse.data
  }
}
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      </div>

      <nav class="header__navigation">
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <div class="categories-wrapper">
    {{ categories }}
  </div>

  <div class="posts-wrapper">
    <div v-for="(post, index) in posts" >
      <Post :title="post.title.rendered" />
    </div>
  </div>


  <div class="products-wrapper">
    <p>Mes produits</p>
    <ul>
      <li v-for="(product, index) in products">
        {{ product.name }}
      </li>
    </ul>
  </div>

  <RouterView />
</template>

<style lang="scss">
.header {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  height: 5rem;

  &__wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  &__logo {
    width: 3rem;
  }

  &__navigation {
    padding-left: 4rem
  }


}

.products-wrapper {
  margin-top: 50px;
}
</style>
