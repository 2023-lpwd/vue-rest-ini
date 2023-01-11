<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="column -size-3" v-for="(column, index) in columns">
          <p class="footer__title">{{ column.title }}</p>
          <a v-for="(link, linkIndex) in column.links" class="footer__link" :href="link.href">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          title: 'Column 1',
          links: [
            {
              label: 'Lien 1',
              href: '/lien-1'
            },
            {
              label: 'Lien 2',
              href: '/lien-2'
            },
            {
              label: 'Lien 3',
              href: '/lien-3'
            }
          ]
        },
        {
          title: 'Column 2',
          links: [
            {
              label: 'Super lien 1',
              href: '/super-lien-1'
            },
            {
              label: 'Super lien 2',
              href: '/super-lien-2'
            },
            {
              label: 'Super lien 3',
              href: '/super-lien-3'
            }
          ]
        },
        {
          title: 'Column 3',
          links: [
            {
              label: 'Super lien 1',
              href: '/super-lien-1'
            },
            {
              label: 'Super lien 2',
              href: '/super-lien-2'
            },
            {
              label: 'Super lien 3',
              href: '/super-lien-3'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.footer {
  background-color: #1c1b1b;

  &__title {
    font-size: 20px;
    font-weight: 700;
    color: white;
  }

  &__link {
    display: block;
    color: white;
    font-size: 16px;
    margin-top: 5px;
  }
}
</style>
