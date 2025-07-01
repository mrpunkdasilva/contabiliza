<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue($event.target.value)"
      class="custom-input"
    />
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../variables';

.input-wrapper {
  width: 100%;
}

.custom-input {
  width: 100%;
  padding: 10px 15px;
  border: $border-style var(--color-white-15);
  border-radius: 5px;
  background-color: transparent;
  color: var(--color-white-94);
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: var(--color-white-94);
  }

  &::placeholder {
    color: var(--color-white-15);
  }
}
</style>
