const IsWithinRangeStrategy = (value, fieldName, min, max) => {
  if (value < min || value > max) {
    return `Deve estar entre ${min} e ${max}.`;
  }
  return null;
};

export default IsWithinRangeStrategy;
