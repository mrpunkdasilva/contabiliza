<template>
  <div class="login-page">
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <UserIcon class="icon" />
          <InputComponent
            type="text"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <div class="input-group">
          <KeyRoundIcon class="icon" />
          <InputComponent
            type="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { InputComponent } from '../components';
import { UserIcon, KeyRoundIcon } from '../components/icons-interface';

export default {
  name: 'LoginPage',
  components: {
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
  methods: {
    handleLogin() {
      console.log('Login attempt with:', this.username, this.password);
      // Implement your login logic here
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../variables';

</style>
