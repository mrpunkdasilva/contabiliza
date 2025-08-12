const IsRequiredStrategy = (value, fieldName) => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return `${fieldName} é obrigatório.`;
  }
  return null;
};

export default IsRequiredStrategy;
