import { STORE_CONTACT, TOGGLE_FORM, TOGGLE_VALID } from '../action-types';

const initialState = {
  contact: {
    name: '',
    email: '',
    github: '',
    message: ''
  },
  formSend: false,
  startedTyping: false,
  validation: {
    name: false,
    email: false,
    github: false,
    message: false
  }
};

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case STORE_CONTACT:
      return {
        ...state,
        contact: {
          ...state.contact,
          [payload.key]: payload.value
        },
        startedTyping: true
      };
    case TOGGLE_FORM:
      return {
        ...state,
        formSend: !state.formSend
      };
    case TOGGLE_VALID:
      return {
        ...state,
        validation: {
          ...state.validation,
          [payload]: !state.validation[payload]
        }
      };
    default:
      return state;
  }
};
