<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { InputComponent } from '../components';
import { KeyRoundIcon } from '../components/icons-interface';
import AuthenticationLayout from "../Layouts/AuthenticationLayout.vue";
import MailIcon from "../components/icons-interface/MailIcon.vue";
import AuthValidator from '../application/auth/Auth.js'; // Importar o validador

const router = useRouter();

const email = ref('');
const password = ref('');
const errors = reactive({});

const handleLogin = () => {
  // Limpar erros anteriores
  Object.keys(errors).forEach(key => delete errors[key]);

  const validationErrors = AuthValidator({ email: email.value, password: password.value });

  if (Object.keys(validationErrors).length > 0) {
    Object.assign(errors, validationErrors);
    console.log('Validation errors:', errors);
    return;
  }

  console.log('Login attempt with:', email.value, password.value);
  // Implement your login logic here
  // router.push('/dashboard'); // Exemplo de redirecionamento após login
};
</script>

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
            v-model="email"
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
            v-model="password"
        />
      </div>
      <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
      </fieldset>
  </AuthenticationLayout>
</template>

<style lang="scss" scoped>
.input-fields {
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: none;
  padding: 0;
  margin: 0;

  div {
    position: relative;
    display: flex;
    align-items: center;

    .mail-icon, .key-round-icon {
      position: absolute;
      left: 12px;
      color: #888;
    }

    .input-component {
      padding-left: 40px;
    }
  }
}
</style>