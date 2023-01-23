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
  padding: .5rem 1.5rem;
  background-color: #2c3e50;
  border-radius: 5px;
  transition: background-color .3s ease;

  &:hover {
    background-color: darken(#2c3e50, 10);
  }

  &.-size-small {
    padding: .5rem 1rem;
  }

  &.-size-large {
    padding: 1rem 3rem;
  }

  &.-color-blue {
    background-color: dodgerblue;

    &:hover {
      background-color: darken(dodgerblue, 10);
    }
  }

  &.-color-orange {
    background-color: orange;

    &:hover {
      background-color: darken(orange, 10);
    }
  }

  &__label {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
}
</style>
