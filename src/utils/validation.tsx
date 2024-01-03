const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isEmail = (email: string): boolean => emailRegEx.test(email);

const isGreaterThanEight = (stringToValidate: string): boolean =>
  stringToValidate.length >= 8;

const isRequired = (stringToValidate: string): boolean =>
  stringToValidate !== "" &&
  stringToValidate !== undefined &&
  stringToValidate !== null;

const isPasswordValid = (password: string): boolean =>
  isGreaterThanEight(password) && isRequired(password);

export { isEmail, isPasswordValid };