<template>
  <AuthenticationLayout
      origin="login"
      destination="signup"
      :handle="handleLogin"
  >
    <fieldset class="input-fields">
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
import {InputComponent} from '../components';
import {UserIcon, KeyRoundIcon} from '../components/icons-interface';
import AuthenticationLayout from "../Layouts/AuthenticationLayout.vue";
import MailIcon from "../components/icons-interface/MailIcon.vue";

export default {
  name: 'LoginPage',
  components: {
    MailIcon,
    AuthenticationLayout,
    InputComponent,
    UserIcon,
    KeyRoundIcon,
  },

  data() {
    return {
      username: '',
      password: '',
    };
  },

  setup() {
    const handleLogin = () => {
      console.log('Login attempt with:', this.username, this.password);
      // Implement your login logic here
    }

    return {
      handleLogin,
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
