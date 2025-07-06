<template>
  <main>
    <img :src="ContabilizaBrand" alt="Contabiliza Brand"/>

    <form>
      <fieldset class="input-fields">
        <div>
          <label class="sr-only" for="username">
            Username
          </label>
          <InputComponent
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              required
          />
        </div>

        <label class="sr-only" for="email">
          Email
        </label>
        <InputComponent
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            required
        />

        <div>
          <label class="sr-only" for="password">
            Password
          </label>
          <InputComponent
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              required
          />
        </div>
      </fieldset>

      <fieldset class="buttons-actions">
        <button class="button-primary">Sign up</button>
        <button class="button-secondary">Login</button>
      </fieldset>
    </form>

  </main>
</template>

<script>
import ContabilizaBrand from '../assets/img/contabiliza.branding.png';
import InputComponent from "../components/Forms/InputComponent.vue";

export default {
  name: 'Signup',
  components: {InputComponent},
  data() {
    return {
      ContabilizaBrand,
    };
  },

};
</script>

<style scoped lang="scss">
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
