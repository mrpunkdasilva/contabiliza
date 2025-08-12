<template>
  <AuthenticationLayout
      :handle="handleSignup"
      destination="login"
      origin="signup"
      :hasErrors="Object.keys(errors).length > 0"
  >
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
            v-model="user.name"
        />
      </div>
      <span v-if="errors.name" class="error-message">{{ errors.name }}</span>

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
            v-model="user.email"
        />
      </div>
      <span v-if="errors.email" class="error-message">{{ errors.email }}</span>

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
            v-model="user.password"
        />
      </div>
      <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
    </fieldset>
  </AuthenticationLayout>
</template>


<script>
import {ref} from 'vue';
import InputComponent from "../components/Forms/InputComponent.vue";
import AuthenticationLayout from "../Layouts/AuthenticationLayout.vue";
import UserIcon from "../components/icons-interface/UserIcon.vue";
import MailIcon from "../components/icons-interface/MailIcon.vue";
import KeyRoundIcon from "../components/icons-interface/KeyRoundIcon.vue";
import AuthValidator from "../application/auth/Auth.js";

export default {
  name: 'Signup',
  components: {KeyRoundIcon, MailIcon, UserIcon, AuthenticationLayout, InputComponent},

  setup() {
    const user = ref({
      name: '',
      email: '',
      password: ''
    });

    const errors = ref({});

    const handleSignup = () => {
      errors.value = AuthValidator(user.value);
      if (Object.keys(errors.value).length > 0) {
        console.error('Validation errors:', errors.value);
      } else {
        console.log('User data is valid:', user.value);
        // Proceed with signup logic
      }
    };

    return {
      user,
      errors,
      handleSignup,
    };
  }
};
</script>

<style lang="scss">
</style>
