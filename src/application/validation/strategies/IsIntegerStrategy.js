const IsIntegerStrategy = (value, fieldName) => {
  if (!Number.isInteger(value)) {
    return 'Deve ser um número inteiro.';
  }
  return null;
};

export default IsIntegerStrategy;
