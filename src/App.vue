<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
    RouterLink,
    RouterView
  }
}
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style lang="scss">

</style>
