const IsIntegerStrategy = (value, fieldName) => {
  if (!Number.isInteger(value)) {
    return `${fieldName} deve ser um número inteiro.`;
  }
  return null;
};

export default IsIntegerStrategy;
