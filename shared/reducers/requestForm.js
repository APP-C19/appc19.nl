import {
  STORE_CONTACT_REQ,
  TOGGLE_FORM_REQ,
  TOGGLE_VALID_REQ
} from '../action-types';

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
    case STORE_CONTACT_REQ:
      return {
        ...state,
        contact: {
          ...state.contact,
          [payload.key]: payload.value
        },
        startedTyping: true
      };
    case TOGGLE_FORM_REQ:
      return {
        ...state,
        formSend: !state.formSend
      };
    case TOGGLE_VALID_REQ:
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
