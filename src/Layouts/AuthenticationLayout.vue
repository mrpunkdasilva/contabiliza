<script>
export default {
  name: "AuthenticationLayout"
}
</script>


<template>
  <main>
    <img src="../assets/img/contabiliza.branding.png" alt="Contabiliza Brand"/>

    <form>

      <slot></slot>

      <fieldset class="buttons-actions">
        <button class="button-primary">Sign up</button>
        <button class="button-secondary">Login</button>
      </fieldset>
    </form>

  </main>
</template>

<style lang="scss">
@use "../variables" as *;

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: $spacing-6;

  form {
    display: flex;
    flex-direction: column;
    gap: $spacing-6;

    fieldset {
      border: none;

      &.input-fields {
        display: flex;
        flex-direction: column;
        gap: $spacing-4;
      }

      &.buttons-actions {
        display: flex;
        gap: $spacing-6;
      }
    }
  }
}
</style>
