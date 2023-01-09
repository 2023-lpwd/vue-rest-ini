<template>
  <div class="post">
    <h2 class="post__title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.post {
  &__title {
    font-size: 1.6rem;
    color: lightsalmon;
  }
}
</style>
