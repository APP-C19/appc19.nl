import { createAction } from 'redux-actions';
import {
  TOGGLE_MENU,
  STORE_CONTACT,
  STORE_CONTACT_REQ,
  TOGGLE_FORM,
  TOGGLE_FORM_REQ,
  TOGGLE_VALID,
  TOGGLE_VALID_REQ
} from './../action-types';

export const setToggleMenu = createAction(TOGGLE_MENU);
export const setToggleValid = createAction(TOGGLE_VALID);
export const setToggleValidReq = createAction(TOGGLE_VALID_REQ);
export const onStoreContact = createAction(STORE_CONTACT);
export const onStoreContactReq = createAction(STORE_CONTACT_REQ);
export const setToggleForm = createAction(TOGGLE_FORM);
export const setToggleFormReq = createAction(TOGGLE_FORM_REQ);
