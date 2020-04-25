import { TOGGLE_MENU } from '../action-types';

const initialState = { toggleMenu: false };

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case TOGGLE_MENU:
      return {
        ...state,
        toggleMenu: payload
      };
    default:
      return state;
  }
};
