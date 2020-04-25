import React from 'react';
import Contact from './components/ContactGeneric';

export default props => (
  <Contact
    {...props}
    startedTyping={props.startedTyping}
    onStoreContact={props.onStoreContactReq}
    setToggleForm={props.setToggleFormReq}
    setToggleValid={props.setToggleValidReq}
    github
  />
);
