const IsWithinRangeStrategy = (value, fieldName, min, max) => {
  if (value < min || value > max) {
    return `${fieldName} deve estar entre ${min} e ${max}.`;
  }
  return null;
};

export default IsWithinRangeStrategy;
