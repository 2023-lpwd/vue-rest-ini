<template>
  <div class="order-view">
    <div class="container">
      <h1 class="order-view__title">Commander</h1>
      <form action="" class="order-view__form">
        <div class="order-view__row || row">
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
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="address">Adresse</label>
              <input class="order-view__input" id="address" type="text" name="address_1" v-model="form.billing.address_1">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="extra-address">Complément d'adresse</label>
              <input class="order-view__input" id="extra-address" type="text" name="address_2" v-model="form.billing.address_2">
            </div>
          </div>
        </div>
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="city">Ville</label>
              <input class="order-view__input" id="city" type="text" name="city" v-model="form.billing.city">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="state">État/région</label>
              <input class="order-view__input" id="state" type="text" name="state" v-model="form.billing.state">
            </div>
          </div>
        </div>
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="zipcode">Code postal</label>
              <input class="order-view__input" id="zipcode" type="text" name="zipcode" v-model="form.billing.zipcode">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="country">Pays</label>
              <input class="order-view__input" id="country" type="text" name="country" v-model="form.billing.country">
            </div>
          </div>
        </div>
        <div class="order-view__row || row">
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="email">Email</label>
              <input class="order-view__input" id="email" type="email" name="email" v-model="form.billing.email">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="phone">Téléphone</label>
              <input class="order-view__input" id="phone" type="text" name="phone" v-model="form.billing.phone">
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
