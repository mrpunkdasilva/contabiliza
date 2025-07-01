<template>
  <main>
    <header>
      <h1>Sobre o Contabiliza</h1>
    </header>

    <section>
      <p>
        O Contabiliza é um aplicativo dedicado a simplificar o controle financeiro pessoal. Nossa missão é capacitar
        você
        a gerenciar seus ganhos diários de forma intuitiva e eficiente, proporcionando uma visão clara da sua saúde
        financeira.
      </p>
      <p>
        Acreditamos que o controle financeiro não precisa ser complicado. Por isso, desenvolvemos o Contabiliza com
        funcionalidades essenciais como o registro de ganhos diários, configuração de salário mensal, acompanhamento de
        dias trabalhados e resumos financeiros detalhados. Além disso, oferecemos flexibilidade com ajustes manuais e
        lembretes personalizáveis para garantir que você esteja sempre no controle.
      </p>
      <p>
        Nosso objetivo é ajudá-lo a alcançar seus objetivos financeiros, promovendo uma gestão mais consciente e
        organizada do seu dinheiro. Com o Contabiliza, você tem as ferramentas necessárias para acompanhar seus
        rendimentos de maneira simples, direta e sem complicações.
      </p>
    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
main {
  padding: 16px;
  width: 80vw;
  display: flex;
  gap: 89px;

  header {
    display: flex;
    flex: 1;
    place-items: center;
  }

  section {
    padding: 24px;

    p {
      column-count: 2;
      column-gap: 34px;
      column-rule: 2px solid aliceblue;
      text-align: left;
    }
  }

  @media screen and (min-width: 2560px) {
    width: 60vw;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
    flex-direction: column;
    gap: 16px;

    section {
      padding: 0px;
    }
  }
  @media screen and (max-width: 425px) {
    width: 90vw;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 16px;

    section {
      p {
        column-count: auto;
      }
    }
  }
  @media screen and (max-width: 1024px) {
     width: 90vw;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 16px;
  }
}
</style>
