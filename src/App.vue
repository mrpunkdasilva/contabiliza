<script setup>
import Home from './pages/Home.vue'
</script>

<template>
  <Home/>
</template>

<style lang="scss">
$color-dark-primary: #120F0F;
$color-white-primary: #fff;
$color-blue-primary: #0D40B1;
$color-blue-200: #082C7B;


* {
  box-sizing: border-box;
  color: $color-white-primary;
  font-family: 'Inter', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background: $color-dark-primary;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
}

@mixin button {
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-transform: capitalize;
  padding: 12px;
  cursor: pointer;
  border-radius: 8px;
  background: transparent;
  border: 2px solid $color-white-primary;
  border-bottom: solid 5px;
  width: 200px;
  height: 60px;

  &:hover {
    opacity: 0.9;
    transition: 0.95s ease-in-out;
    transform: translate(0px, -3px);
  }
}

.button-primary {
  @include button;
  background-color: $color-blue-primary;
  border-color: $color-blue-200;
}

.button-secondary {
  @include button;
  background-color: transparent;
  border-color: $color-blue-200;
}

</style>
