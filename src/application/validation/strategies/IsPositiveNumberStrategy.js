const IsPositiveNumberStrategy = (value, fieldName) => {
  if (typeof value !== 'number' || value <= 0) {
    return 'Deve ser um número positivo.';
  }
  return null;
};

export default IsPositiveNumberStrategy;
