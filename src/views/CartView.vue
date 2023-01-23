<template>
  <div class="cart-view">
    <div class="container">
      <h1>Mon panier</h1>
      <div class="cart-view__list">
        <div v-for="(product, index) in $store.state.products" class="cart-view__item" :key="index">
          <CartProduct v-bind="{ images: product.images, name: product.name, price: product.price }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue"

export default {
  components: {CartProduct}
}
</script>
