<template>
  <AuthenticationLayout>
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
  </AuthenticationLayout>
</template>

<script>
import InputComponent from "../components/Forms/InputComponent.vue";
import AuthenticationLayout from "../Layouts/AuthenticationLayout.vue";

export default {
  name: 'Signup',
  components: {AuthenticationLayout, InputComponent},
  data() {
    return {};
  },

};
</script>

<style scoped lang="scss">
</style>
