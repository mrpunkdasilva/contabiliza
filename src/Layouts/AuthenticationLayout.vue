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

      div {
        position: relative;

        svg {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 30%;
          left: $spacing-4;
        }
      }

      &.input-fields {
        display: flex;
        flex-direction: column;
        gap: $spacing-4;

        input {
          text-indent: calc($spacing-6 * 1.3);
        }
      }

      &.buttons-actions {
        display: flex;
        gap: $spacing-6;
      }
    }
  }
}
</style>
