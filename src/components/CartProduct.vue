<template>
  <div class="cart-product">
    <img v-if="mainImage" class="cart-product__image" :src="mainImage.src" :alt="mainImage.alt" />
    <span class="cart-product__name">{{ name }}</span>
    <span class="cart-product__price">{{ price }}€</span>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: null
    },
    price: {
      type: String,
      default: null
    }
  },

  computed: {
    mainImage () {
      if (!this.images.length) return
      return this.images[0]
    }
  }
}
</script>

<style lang="scss">
.cart-product {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;


  &__image {
    width: 100px;
    height: auto;
  }

  &__name {
    font-size: 16px;
    font-weight: 700;
  }

  &__price {
    font-size: 16px;
  }
}
</style>
