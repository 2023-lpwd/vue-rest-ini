<template>
  <div class="showroom">
    <div class="container">
      <h2 class="showroom__title">{{ title }}</h2>

      <div class="showroom__images | row">
        <div class="showroom__media | column -size-6" v-for="(link, index) in imageLinks" :key="index">
          <img class="showroom__image" :src="link" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { client } from "@/utils/axios"

export default {
  props: {
    title: {
      type: String,
      default: null
    },
    images: {
      type: Array,
      default: []
    }
  },

  data () {
    return {
      imageLinks: []
    }
  },

  async mounted () {
    this.imageLinks = await this.getImageLinks()
  },

  methods: {
    /**
     * Transforme un tableau d'identifiants en tableau d'url
     * exemple: [23, 56] -> [http://..., http://...]
     * @returns {Promise<*[]>}
     */
    async getImageLinks () {
      if (!this.images.length) return
      const images = []
      for await (const image of this.images) {
        const imageResponse = await client.get(import.meta.env.VITE_WP_API_URL + '/wp/v2/media/' + image)
        images.push(imageResponse.data.source_url)
      }
      return images
    }
  }
}
</script>

<style lang="scss">
.showroom {
  background-color: #2c3e50;
  padding: 100px 20px 200px 20px;

  &__title {
    font-size: 55px;
    font-weight: 700;
    color: white;
  }

  &__images {
    margin-top: 50px;
  }

  &__media {
    &:nth-of-type(even) {
      transform: translate3d(0, 100px, 0);
    }
  }

  &__image {
    max-width: 100%;
  }
}
</style>
