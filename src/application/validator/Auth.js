const AuthValidator = (user) => {
  const errors = {};

  if (!user.name || user.name.trim() === '') {
    errors.name = 'Username is required';
  }

  if (!user.email || user.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email = 'Email is invalid';
  }

  if (!user.password || user.password.trim() === '') {
    errors.password = 'Password is required';
  } else if (user.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return errors;
};

export default AuthValidator;
