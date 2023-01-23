<template>
  <div class="product-gallery">
    <div class="product-gallery__media">
      <img class="product-gallery__image" :src="active.src" :alt="active.alt">
    </div>
    <div class="product-gallery__list">
      <div v-for="(image, index) in images" class="product-gallery__item" :key="index">
        <div class="product-gallery__media">
          <img class="product-gallery__image" :src="image.src" :alt="image.alt">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      active: this.images[0]
    }
  }
}
</script>

<style lang="scss">
.product-gallery {

  &__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 20px;
  }

  &__item {
    width: 22.5%;
  }

  &__media {
    aspect-ratio: 1;
    border: 1px solid grey;
    border-radius: 10px;
    overflow: hidden;
  }

  &__image {
    max-width: 100%;
    object-fit: cover;
  }

}
</style>
