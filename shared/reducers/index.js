import { combineReducers } from 'redux';
import contactForm from './contactForm';
import header from './header';
import requestForm from './requestForm';

const rootReducer = combineReducers({
  header,
  contactForm,
  requestForm
});

export default rootReducer;
