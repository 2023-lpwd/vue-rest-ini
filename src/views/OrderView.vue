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
              <label class="order-view__label" for="postcode">Code postal</label>
              <input class="order-view__input" id="postcode" type="text" name="postcode" v-model="form.billing.postcode">
            </div>
          </div>
          <div class="column -size-6">
            <div class="order-view__field">
              <label class="order-view__label" for="country">Pays</label>
              <select class="order-view__input" v-model="form.billing.country">
                <option disabled value="">Sélectionner un pays</option>
                <option value="DE">Allemagne</option>
                <option value="BE">Belgique</option>
                <option value="IT">Italie</option>
                <option value="ES">Espagne</option>
                <option value="CH">Suisse</option>
                <option value="FR">France</option>
              </select>
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
        {{ form.billing }}
        <div class="order-view__submit">
          <Button :label="'Valider la commande'" @click="confirmOrder" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import {client} from "@/utils/axios"

export default {
  components: {Button},
  data () {
    return {
      form: {
        billing: {
          first_name: '',
          last_name: '',
          address_1: '',
          address_2: '',
          city: '',
          state: '',
          postcode: '',
          country: '',
          email: '',
          phone: ''
        },
        shipping: {
          first_name: '',
          last_name: '',
          address_1: '',
          address_2: '',
          city: '',
          state: '',
          postcode: '',
          country: ''
        },
      }
    }
  },

  methods: {
    confirmOrder () {
      // Create array from store product array with only needed keys
      const lineItems = this.$store.state.products.map((product) => {
        return {
          product_id: product.id,
          quantity: product.quantity
        }
      })

      // Trigger a POST request on the order endpoint to create an order
      const response = client.post(`${import.meta.env.VITE_WP_API_URL}/wc/v3/orders`, {
        payment_method: "paypal",
        payment_method_title: "PayPal",
        set_paid: true,
        billing: this.form.billing,
        shipping: this.form.billing,
        line_items: lineItems
      })
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

  &__row {
    margin-top: 20px;
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
