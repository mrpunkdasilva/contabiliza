<template>
  <router-view/>
</template>

<style lang="scss">
@use './variables' as variables;
@use './mixins' as mixins; // Importar os mixins

.sr-only {
  display: none;
}

h1 {
  @include mixins.heading(48px, bold, variables.$color-white-primary);
}

h2 {
  @include mixins.heading(40px, bold, variables.$color-white-primary);
}

h3 {
  @include mixins.heading(32px, bold, variables.$color-white-primary);
}

h4 {
  @include mixins.heading(24px, bold, variables.$color-white-primary);
}

h5 {
  @include mixins.heading(20px, bold, variables.$color-white-primary);
}

h6 {
  @include mixins.heading(16px, bold, variables.$color-white-primary);
}

* {
  box-sizing: border-box;
  @include mixins.paragraph;
  font-family: 'Inter', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background: variables.$color-dark-primary;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  letter-spacing: 1px;
  line-height: 29px;
}

.button-primary {
  @include mixins.button;
  background-color: variables.$color-blue-primary;
  border-color: variables.$color-blue-200;
}

.button-secondary {
  @include mixins.button;
  background-color: transparent;
  border-color: variables.$color-blue-200;
}

.error-message {
  color: red;
  font-size: 0.875em;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

.button-error {
  @include mixins.button;
  background-color: variables.$color-error;
  animation: shake 0.5s;
  border-color: variables.$color-error-dark;
  color: variables.$color-white;
}
</style>