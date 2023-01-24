<template>
  <div class="cart-product">
    <img v-if="mainImage" class="cart-product__image" :src="mainImage.src" :alt="mainImage.alt" />
    <span class="cart-product__name">{{ name }}</span>
    <span class="cart-product__quantity">qte: {{ quantity }}</span>
    <span class="cart-product__price">{{ price }}€</span>
    <p class="cart-product__total">
      Total
      <br>
      {{ total }}€
    </p>
    <span class="cart-product__remove" @click="removeFromCart">x</span>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null
    },
    images: {
      type: Array,
      default: () => []
    },
    quantity: {
      type: Number,
      default: 1
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
    },
    total () {
      return this.price * this.quantity
    }
  },

  methods: {
    removeFromCart () {
      this.$store.commit('remove', this.id)
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

  &__total {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }

  &__remove {
    font-size: 30px;
    color: red;
    cursor: pointer;
  }
}
</style>
