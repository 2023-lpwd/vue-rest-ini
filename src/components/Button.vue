<template>
  <div :class="['button', `-color-${color}`, `-size-${size}`]">
    <span class="button__label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String
    },
    size: {
      type: String
    },
    label: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.button {
  display: inline-flex;
  padding: 2rem 4rem;
  background-color: red;
  border-radius: 5px;

  &.-size-small {
    padding: 1rem 2rem;
  }

  &.-size-large {
    padding: 2rem 6rem;
  }

  &.-color-blue {
    background-color: dodgerblue;
  }

  &.-color-orange {
    background-color: orange;
  }

  &__label {
    font-size: 16px;
    color: white;
  }
}
</style>
