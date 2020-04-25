export const validate = (fieldName, value) => {
  switch (fieldName) {
    case 'email':
      if (value !== '' && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        return true;
      }
      return false;
    case 'name':
      if (value !== '') {
        return true;
      }
      return false;
    case 'github':
      if (value !== '') {
        return true;
      }
      return false;
    case 'message':
      if (value !== '') {
        return true;
      }
      return false;

    default:
      return true;
  }
};

export const setValidationStyle = (
  fieldName,
  value,
  fieldValid,
  setToggleValid
) => {
  if (validate(fieldName, value) && !fieldValid) {
    setToggleValid(fieldName);
  } else if (!validate(fieldName, value) && fieldValid) {
    setToggleValid(fieldName);
  }
};

export const allFieldsValid = (validation, github) => {
  if (github) {
    if (
      validation.name &&
      validation.email &&
      validation.github &&
      validation.message
    ) {
      return true;
    }
    return false;
  }
  if (validation.name && validation.email && validation.message) {
    return true;
  }
  return false;
};
