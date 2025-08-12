const IsEmailStrategy = (value, fieldName) => {
  if (!/\S+@\S+\.\S+/.test(value)) {
    return 'Formato de e-mail inválido.';
  }
  return null;
};

export default IsEmailStrategy;
