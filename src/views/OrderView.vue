<template>
  <div class="order-view">
    <div class="container">
      <h1 class="order-view__title">Commander</h1>
      <form action="" class="order-view__form">
        <div class="row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="firstname">Prénom</label>
              <input class="order-view__input" id="firstname" type="text" name="first_name" v-model="form.billing.first_name">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="lastname">Nom</label>
              <input class="order-view__input" id="lastname" type="text" name="last_name" v-model="form.billing.last_name">
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        billing: {
          first_name: null,
          last_name: null,
          address_1: null,
          address_2: null,
          city: null,
          state: null,
          postcode: null,
          country: null,
          email: null,
          phone: null
        },
        shipping: {
          first_name: null,
          last_name: null,
          address_1: null,
          address_2: null,
          city: null,
          state: null,
          postcode: null,
          country: null
        },
      }
    }
  }
}
</script>

<style lang="scss">
.order-view {
  padding: 50px;

  &__form {
    margin-top: 50px;
  }

  &__field {
    display: flex;
    flex-flow: column wrap;
  }

  &__label {
    font-size: 16px;
    font-weight: 700;
  }

  &__input {
    padding: 10px;
    font-size: 16px;
  }

}
</style>
