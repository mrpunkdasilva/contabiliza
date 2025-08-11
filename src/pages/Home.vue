<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

console.log('Home component mounted!');

const goToSignup = () => {
  router.push('/signup');
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <main class="home-view">
    <img src="../assets/img/contabiliza.branding.png" alt="Contabiliza - Contabilidade e Finanças pessoais."/>

    <p>Comece a <strong>controlar</strong> seus ganhos hoje mesmo!</p>

    <div role="group">
      <button @click="goToSignup" class="button-primary">
        Sign up
      </button>

      <button @click="goToLogin" class="button-secondary">
        Login
      </button>
    </div>
  </main>
</template>

<style scoped lang="scss">
.home-view {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 24px;

  div {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;;
  }
}
</style>
