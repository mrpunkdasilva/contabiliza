const Validator = (data, validations) => {
  const errors = {};

  for (const fieldName in validations) {
    const fieldValidations = validations[fieldName];
    const value = data[fieldName];

    for (const validation of fieldValidations) {
      const [strategy, ...args] = validation;
      const errorMessage = strategy(value, fieldName, ...args);
      if (errorMessage) {
        errors[fieldName] = errorMessage;
        break; // Stop on first error for this field
      }
    }
  }

  return errors;
};

export default Validator;
