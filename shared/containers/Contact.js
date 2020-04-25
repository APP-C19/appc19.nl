import { connect } from 'react-redux';
import ContactForm from './../components/Contact/Contact';
import { onStoreContact, setToggleValid, setToggleForm } from '../actions';

const mapStateToProps = ({
  contactForm: { contact, formSend, startedTyping, validation }
}) => ({
  contact,
  formSend,
  startedTyping,
  validation
});

const mapDispatchToProps = dispatch => ({
  onStoreContact: payload => dispatch(onStoreContact(payload)),
  setToggleValid: payload => dispatch(setToggleValid(payload)),
  setToggleForm: () => dispatch(setToggleForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
