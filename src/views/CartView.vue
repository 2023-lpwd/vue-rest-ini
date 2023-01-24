<template>
  <div class="cart-view">
    <div class="container">
      <h1>Mon panier</h1>
      <div class="cart-view__list">
        <div v-for="(product, index) in $store.state.products" class="cart-view__item" :key="index">
          <CartProduct v-bind="{ id: product.id, quantity: product.quantity, images: product.images, name: product.name, price: product.price }" />
        </div>
      </div>
      <div class="cart-view__total">
        Total : {{ cartTotal }}€
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue"

export default {
  components: { CartProduct },

  computed: {
    cartTotal () {
      return this.$store.state.products.reduce((total, product) => {
        total+=product.quantity * product.price
        return total
      }, 0)
    }
  }
}
</script>
