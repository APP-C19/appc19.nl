import { connect } from 'react-redux';
import RequestForm from './../components/Contact/Request';
import {
  onStoreContactReq,
  setToggleValidReq,
  setToggleFormReq
} from '../actions';

const mapStateToProps = ({
  requestForm: { contact, formSend, startedTyping, validation }
}) => ({
  contact,
  formSend,
  startedTyping,
  validation
});

const mapDispatchToProps = dispatch => ({
  onStoreContactReq: payload => dispatch(onStoreContactReq(payload)),
  setToggleValidReq: payload => dispatch(setToggleValidReq(payload)),
  setToggleFormReq: () => dispatch(setToggleFormReq())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestForm);
