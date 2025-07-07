<template>
  <AuthenticationLayout>
    <fieldset class="input-fields">
      <div>
        <label class="sr-only" for="username">
          Username
        </label>
        <UserIcon/>
        <InputComponent
            placeholder="Username"
            type="text"
            id="username"
            name="username"
            required
        />
      </div>

      <div>
        <label class="sr-only" for="email">
          Email
        </label>
        <MailIcon/>
        <InputComponent
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            required
        />
      </div>

      <div>
        <label class="sr-only" for="password">
          Password
        </label>
        <KeyRoundIcon/>
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
import UserIcon from "../components/icons-interface/UserIcon.vue";
import MailIcon from "../components/icons-interface/MailIcon.vue";
import KeyRoundIcon from "../components/icons-interface/KeyRoundIcon.vue";

export default {
  name: 'Signup',
  components: {KeyRoundIcon, MailIcon, UserIcon, AuthenticationLayout, InputComponent},
  data() {
    return {};
  },

};
</script>

<style scoped lang="scss">
</style>
