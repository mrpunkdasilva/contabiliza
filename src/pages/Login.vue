<template>
  <div>
    <h1>Login</h1>
    <p>This is the Login page.</p>
    <button @click="goToDashboard" class="button-primary">Go to Dashboard</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToDashboard = () => {
  router.push('/dashboard');
};
</script>

<style scoped>
div {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #0D40B1;
}

p {
  color: #fff;
}

.button-primary {
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-transform: capitalize;
  padding: 12px;
  cursor: pointer;
  border-radius: 8px;
  background: #0D40B1;
  border: 2px solid #082C7B;
  border-bottom: solid 5px;
  width: 200px;
  height: 60px;
  margin-top: 20px;

  &:hover {
    opacity: 0.9;
    transition: 0.95s ease-in-out;
    transform: translate(0px, -3px);
  }
}
</style>