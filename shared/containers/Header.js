import { connect } from 'react-redux';
import Header from './../components/Header';
import { setToggleMenu } from './../actions';

const mapStateToProps = ({ header: { toggleMenu } }) => ({
  toggleMenu
});

const mapDispatchToProps = dispatch => ({
  setToggleMenu: e => dispatch(setToggleMenu(e))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
