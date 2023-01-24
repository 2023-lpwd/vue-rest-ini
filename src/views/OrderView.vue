<template>
  <div class="order-view">
    <label for="firstname">Prénom</label>
    <input id="firstname" type="text" name="first_name" v-model="form.first_name">
    <br>
    Le prénom est : {{ form.first_name }}
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
