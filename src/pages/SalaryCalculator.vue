<script setup>
import { ref, reactive } from 'vue';
import InputComponent from '../components/Forms/InputComponent.vue'; // Reutilizando o InputComponent

const monthlySalary = ref(0);
const daysInMonth = ref(30); // Valor padrão
const daysNotWorked = ref(0);
const amountToReceive = ref(0);
const errors = reactive({});

const validateInputs = () => {
  // Clear previous errors
  Object.keys(errors).forEach(key => delete errors[key]);

  let isValid = true;

  // Validate monthlySalary
  if (monthlySalary.value <= 0) {
    errors.monthlySalary = 'O salário mensal deve ser um valor positivo.';
    isValid = false;
  }

  // Validate daysInMonth
  if (daysInMonth.value <= 0 || !Number.isInteger(daysInMonth.value)) {
    errors.daysInMonth = 'Os dias no mês devem ser um número inteiro positivo.';
    isValid = false;
  } else if (daysInMonth.value < 28 || daysInMonth.value > 31) {
    errors.daysInMonth = 'Os dias no mês devem estar entre 28 e 31.';
    isValid = false;
  }

  // Validate daysNotWorked
  if (daysNotWorked.value < 0 || !Number.isInteger(daysNotWorked.value)) {
    errors.daysNotWorked = 'Os dias não trabalhados devem ser um número inteiro não negativo.';
    isValid = false;
  } else if (daysNotWorked.value > daysInMonth.value) {
    errors.daysNotWorked = 'Os dias não trabalhados não podem ser maiores que os dias no mês.';
    isValid = false;
  }

  return isValid;
};

const calculateSalary = () => {
  if (!validateInputs()) {
    amountToReceive.value = 0; // Reset result if validation fails
    return;
  }

  const daysWorked = daysInMonth.value - daysNotWorked.value;
  amountToReceive.value = (daysWorked / daysInMonth.value) * monthlySalary.value;
};
</script>

<template>
  <div class="salary-calculator-container">
    <h1>Calculadora de Salário Proporcional</h1>

    <div class="input-group">
      <label for="monthlySalary">Salário Mensal (R$):</label>
      <InputComponent
        id="monthlySalary"
        type="number"
        v-model.number="monthlySalary"
        placeholder="Ex: 500"
      />
      <span v-if="errors.monthlySalary" class="error-message">{{ errors.monthlySalary }}</span>
    </div>

    <div class="input-group">
      <label for="daysInMonth">Dias no Mês:</label>
      <InputComponent
        id="daysInMonth"
        type="number"
        v-model.number="daysInMonth"
        placeholder="Ex: 30 ou 31"
      />
      <span v-if="errors.daysInMonth" class="error-message">{{ errors.daysInMonth }}</span>
    </div>

    <div class="input-group">
      <label for="daysNotWorked">Dias Não Trabalhados:</label>
      <InputComponent
        id="daysNotWorked"
        type="number"
        v-model.number="daysNotWorked"
        placeholder="Ex: 13"
      />
      <span v-if="errors.daysNotWorked" class="error-message">{{ errors.daysNotWorked }}</span>
    </div>

    <button @click="calculateSalary" class="button-primary">Calcular</button>

    <div v-if="amountToReceive > 0" class="result">
      <h2>Valor a Receber: R$ {{ amountToReceive.toFixed(2) }}</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../variables' as variables; // Importar as variáveis globais
@use '../mixins' as mixins; // Importar os mixins

.salary-calculator-container {
  display: flex;
  flex-direction: column;
  gap: variables.$spacing-4; // Usar variável de espaçamento
  padding: variables.$spacing-6; // Usar variável de espaçamento
  border-radius: variables.$border-radius-lg; // Usar variável de border-radius
  background-color: variables.$color-dark-primary; // Usar cor primária do projeto
  box-shadow: variables.$shadow-md; // Usar variável de sombra
  max-width: 450px; // Ajustar largura máxima
  margin: 50px auto;
  color: variables.$color-white-primary; // Usar cor de texto primária

  h1 {
    @include mixins.heading(variables.$font-size-3xl, variables.$font-weight-bold, variables.$color-white-primary); // Usar mixin de heading
    text-align: center;
    margin-bottom: variables.$spacing-4;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: variables.$spacing-2; // Espaçamento menor para elementos do grupo

    label {
      font-weight: variables.$font-weight-medium; // Usar variável de font-weight
      color: variables.$color-white-primary; // Cor do label
    }

    .input-component {
      width: 100%;
      padding: variables.$input-padding-y variables.$input-padding-x; // Usar variáveis de padding
      border: 1px solid variables.$input-border-color; // Usar variável de cor de borda
      border-radius: variables.$border-radius-md; // Usar variável de border-radius
      background-color: variables.$input-background; // Usar variável de background
      color: variables.$color-dark-primary; // Cor do texto do input
      font-size: variables.$font-size-base; // Usar variável de font-size

      &:focus {
        border-color: variables.$input-border-focus; // Cor da borda no focus
        outline: none;
        box-shadow: 0 0 0 3px rgba(variables.$input-border-focus, 0.2); // Sombra no focus
      }
    }
  }

  .button-primary { // Usar a classe global button-primary
    @include mixins.button; // Incluir o mixin button
    background-color: variables.$color-blue-primary; // Cor de fundo do botão
    border-color: variables.$color-blue-200; // Cor da borda do botão
    color: variables.$color-white-primary; // Cor do texto do botão
    width: 100%; // Botão de largura total
    height: auto; // Altura automática para o padding
    padding: variables.$spacing-3 variables.$spacing-4; // Ajustar padding
    font-size: variables.$font-size-lg; // Ajustar tamanho da fonte

    &:hover {
      opacity: 0.9;
      transition: 0.95s ease-in-out;
      transform: translate(0px, -3px);
    }
  }

  .result {
    margin-top: variables.$spacing-4;
    text-align: center;

    h2 {
      @include mixins.heading(variables.$font-size-2xl, variables.$font-weight-bold, variables.$color-success); // Usar mixin e cor de sucesso
    }
  }

  .error-message {
    color: variables.$color-error; // Cor vermelha para mensagens de erro
    font-size: variables.$font-size-sm; // Tamanho de fonte menor
    margin-top: variables.$spacing-1; // Pequena margem superior
  }
}
</style>