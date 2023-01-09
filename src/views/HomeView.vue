<template>
  <main class="home">
<!--    <div class="home__products">-->
<!--      <div class="home__product-item">-->
<!--        <Product />-->
<!--      </div>-->
<!--    </div>-->
  </main>
</template>

<script>
import Product from '@/components/Product.vue'
export default {
  components: {
    Product
  }
}
</script>

<style lang="scss">
.home {
  &__products {
    display: flex;
    flex-flow: row wrap;
    margin-top: 5rem;
  }

  &__product-item {
    width: 33.333%;
  }
}
</style>
