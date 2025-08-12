const Validator = (data, validations) => {
  const errors = {};

  for (const fieldName in validations) {
    const fieldValidations = validations[fieldName];
    const value = data[fieldName];

    for (const strategyInfo of fieldValidations) {
      const [Strategy, ...args] = strategyInfo;
      const errorMessage = Strategy(value, ...args);

      if (errorMessage) {
        errors[fieldName] = errorMessage;
        break;
      }
    }
  }

  return errors;
};

export default Validator;
