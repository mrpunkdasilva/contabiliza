const IsGreaterThanOrEqualToStrategy = (value, fieldName, minValue) => {
  const numericValue = parseFloat(value);
  if (isNaN(numericValue) || numericValue < minValue) {
    return `${fieldName} deve ser maior ou igual a ${minValue}.`;
  }
  return undefined;
};

export default IsGreaterThanOrEqualToStrategy;
