<template>
  <div class="categories">
    <div class="container">
      <ul class="categories__list">
        <li class="categories__item" v-for="(category, index) in items">
          <RouterLink :class="'categories__link'" :to="`/category/${category.slug}`">{{ category.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss">
.categories {
  padding: 20px 40px;
  background-color: #243b3b;
  border-top: 1px solid black;

  &__list {
    display: flex;
    flex-flow: row wrap;
  }

  &__item {
    &:not(:first-of-type) {
      margin-left: 20px;
    }
  }

  &__link {
    color: white;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>
