<template>
  <div class="showroom">
    <div class="container">
      <h2 class="showroom__title">{{ title }}</h2>
    </div>
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

</style>
