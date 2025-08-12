const IsLessThanOrEqualToStrategy = (value, fieldName, comparisonValue, comparisonFieldName) => {
  if (value > comparisonValue) {
    return `${fieldName} não pode ser maior que ${comparisonFieldName}.`;
  }
  return null;
};

export default IsLessThanOrEqualToStrategy;
