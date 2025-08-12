const IsLessThanOrEqualToStrategy = (value, fieldName, otherValue, otherFieldName) => {
  if (value > otherValue) {
    return `${fieldName} deve ser menor ou igual a ${otherFieldName}.`;
  }
  return undefined;
};

export default IsLessThanOrEqualToStrategy;
