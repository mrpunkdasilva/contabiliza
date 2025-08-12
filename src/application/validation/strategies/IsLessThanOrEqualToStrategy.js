const IsLessThanOrEqualToStrategy = (value, fieldName, comparisonValue, comparisonFieldName) => {
  if (value > comparisonValue) {
    return `Não pode ser maior que ${comparisonFieldName}.`;
  }
  return null;
};

export default IsLessThanOrEqualToStrategy;
