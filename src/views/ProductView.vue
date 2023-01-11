<template>
  <div class="product-view">
    <div class="container">
      <div class="row">
        <div class="column -size-6">

        </div>
        <div class="column -size-6">
          <Button :color="'blue'" :label="'Ajouter au panier'" />
          <Button :color="'blue'" :size="'large'" :label="'Ajouter au panier'" />
          <Button :color="'orange'" :size="'small'" :label="'Ajouter au panier'" />
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
