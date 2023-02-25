export const validatePassword = (password) => {
  if (
    password.match(/\d+/g) &&
    password.match(/[A-Z]+/g) &&
    password.match(/[a-z]+/g) &&
    password.length > 7
  ) {
    return true;
  } else {
    return false;
  }
};

export const validatePasswordSpecialCharacter = (password) => {
  if (password.match(/[!@#$%.^&*_=+-]/g)) {
    return true;
  } else {
    return false;
  }
};

export const validatePasswordUpperCase = (password) => {
  if (password.match(/[A-Z]+/g)) {
    return true;
  } else {
    return false;
  }
};

export const validatePasswordLowercase = (password) => {
  if (password.match(/[a-z]+/g)) {
    return true;
  } else {
    return false;
  }
};

export const validatePasswordLength = (password) => {
  if (password.length > 7) {
    return true;
  } else {
    return false;
  }
};

export const validatePasswordNumber = (password) => {
  if (password.match(/[0-9]+/g)) {
    return true;
  } else {
    return false;
  }
};

export const validatePasswordTwo = (password) => {
  if (
    password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?!%@#$%^&*])[A-Za-z0-9?!%@#$%^&*]{8,}$/gm
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = (email) => {
  if (
    email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    return true;
  } else {
    return false;
  }
};
