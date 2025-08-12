const MinLengthStrategy = (value, fieldName, minLength) => {
  if (typeof value !== 'string' || value.length < minLength) {
    return `Deve ter pelo menos ${minLength} caracteres.`;
  }
  return null;
};

export default MinLengthStrategy;
