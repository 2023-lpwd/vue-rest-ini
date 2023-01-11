<template>
  <div class="product-view">
    <div class="container">
      <div class="row">
        <div class="column -size-6">

        </div>
        <div class="column -size-6">
          <Button :color="'orange'" :label="'Ajouter au panier'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  components: {
    Button
  }
}
</script>

<style lang="scss">

</style>
