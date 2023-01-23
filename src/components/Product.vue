<template>
  <div class="product">
    {{ $store.state.count }}
    <RouterLink :class="'product__link'" :to="`/products/${slug}`" />
    <div v-if="cover" class="product__media">
      <img :class="'product__image'" :src="cover.src" :alt="cover.alt">
    </div>
    <p class="product__name">{{ name }}</p>
    <p class="product__price">{{ price }}€</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
    slug: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    price: {
      type: String,
      default: null
    },
    images: {
      type: Array,
      default: []
    }
  },

  computed: {
    cover () {
      if (!this.images.length) return
      const [cover] = this.images
      return cover
    }
  }
}
</script>

<style lang="scss">
.product {
  position: relative;

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  &__media {
     width: 100%;
   }

  &__name {
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    color: darkslategrey;
  }

  &__image {
    max-width: 100%;
  }

  &__price {
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
  }
}
</style>
