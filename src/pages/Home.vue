<script setup>

</script>

<template>
  <main class="home-view">
    <img src="../assets/img/contabiliza.horizontal.png" alt="Contabiliza - Contabilidade e Finanças pessoais."/>

    <p>Comece a <strong>controlar</strong> seus ganhos hoje mesmo!</p>

    <div role="group">
      <button class="button-primary">
        Sign up
      </button>

      <button class="button-secondary">
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
