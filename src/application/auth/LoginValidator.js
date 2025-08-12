import Validator from '../validation/Validator.js';
import IsRequiredStrategy from '../validation/strategies/IsRequiredStrategy.js';
import IsEmailStrategy from '../validation/strategies/IsEmailStrategy.js';
import MinLengthStrategy from '../validation/strategies/MinLengthStrategy.js';

const LoginValidator = (user) => {
  const data = {
    email: user.email,
    password: user.password,
  };

  const validations = {
    email: [
      [IsRequiredStrategy, 'Email'],
      [IsEmailStrategy, 'Email'],
    ],
    password: [
      [IsRequiredStrategy, 'Senha'],
      [MinLengthStrategy, 'Senha', 6],
    ],
  };

  return Validator(data, validations);
};

export default LoginValidator;
