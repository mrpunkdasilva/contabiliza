<template>
  <router-view/>
</template>

<style lang="scss">
$color-dark-primary: #120F0F;
$color-white-primary: #fff;
$color-blue-primary: #0D40B1;
$color-blue-200: #082C7B;

@mixin heading($font-size, $font-weight, $color) {
  font-size: $font-size;
  font-weight: $font-weight;
  color: $color;
}

h1 {
  @include heading(48px, bold, $color-white-primary);
}

h2 {
  @include heading(40px, bold, $color-white-primary);
}

h3 {
  @include heading(32px, bold, $color-white-primary);
}

h4 {
  @include heading(24px, bold, $color-white-primary);
}

h5 {
  @include heading(20px, bold, $color-white-primary);
}

h6 {
  @include heading(16px, bold, $color-white-primary);
}

@mixin paragraph {
  font-size: 16px;
  color: $color-white-primary;
  line-height: 1.5;
}

* {
  box-sizing: border-box;
  @include paragraph;
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
  letter-spacing: 1px;
  line-height: 29px;
}

@mixin button {
  font-size: 16px;
  font-weight: bold;
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
