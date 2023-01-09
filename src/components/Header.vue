<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
        </div>

        <nav class="header__navigation">
          <RouterLink :class="'header__link'" to="/">Home</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <div class="categories-wrapper">
    <Categories v-bind="{ items: categories }" />
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Categories from "@/components/Categories.vue"
import {client} from "@/utils/axios"

export default {
  components: {
    Categories,
    RouterLink
  },

  data () {
    return {
      categories: []
    }
  },

  async mounted () {
    // Request categories
    const categoriesResponse = await client.get(import.meta.env.VITE_WP_API_URL + '/wc/v3/products/categories')
    this.categories = categoriesResponse.data
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #1c1b1b;

  &__wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
  }

  &__logo {
    width: 3rem;
  }

  &__navigation {
    padding-left: 4rem
  }

  &__link {
    color: #ffffff;
    font-weight: 700;
    text-decoration: none;
  }

}
</style>
