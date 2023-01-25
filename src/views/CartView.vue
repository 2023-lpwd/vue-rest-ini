<template>
  <div class="cart-view">
    <div class="container">
      <h1>Mon panier</h1>
      <div v-if="$store.state.products.length" class="cart-view__wrapper">
        <div class="cart-view__list">
          <div v-for="(product, index) in $store.state.products" class="cart-view__item" :key="index">
            <CartProduct
                v-bind="{ id: product.id, quantity: product.quantity, images: product.images, name: product.name, price: product.price }"/>
          </div>
        </div>
        <div class="cart-view__total">
          Total : {{ cartTotal }}€
        </div>
        <div class="cart-view__validate">
          <Button :label="'Valider le panier'"/>
        </div>
      </div>
      <div v-else>
        <p class="cart-view__empty">Le panier est vide</p>
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue"
import Button from "@/components/Button.vue"

export default {
  components: { Button, CartProduct },

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

<style lang="scss">
.cart-view {
  padding: 50px;

  &__total {
    font-size: 20px;
    font-weight: 700;
    margin-top: 50px;
    text-align: right;
   }

  &__validate {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    margin-top: 50px;
  }

  &__empty {
    font-size: 20px;
    margin-top: 20px;
  }
}
</style>
