const IsEmailStrategy = (value, fieldName) => {
  if (!/\S+@\S+\.\S+/.test(value)) {
    return `${fieldName} é inválido.`;
  }
  return null;
};

export default IsEmailStrategy;
