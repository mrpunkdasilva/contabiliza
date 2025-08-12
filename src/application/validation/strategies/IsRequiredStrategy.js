const IsRequiredStrategy = (value, fieldName) => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return 'Campo obrigatório.';
  }
  return null;
};

export default IsRequiredStrategy;
