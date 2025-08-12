const IsPositiveNumberStrategy = (value, fieldName) => {
  if (typeof value !== 'number' || value <= 0) {
    return `${fieldName} deve ser um número positivo.`;
  }
  return null;
};

export default IsPositiveNumberStrategy;
