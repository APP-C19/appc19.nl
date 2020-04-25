import React from 'react';
import styled, { css } from 'styled-components';
import { setValidationStyle, allFieldsValid } from './validate';
import submitToSlack from '../../../api/submitToSlack';

const placeholderColor = css`
  ::-webkit-input-placeholder {
    color: ${props => props.theme.colors.grey};
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${props => props.theme.colors.grey};
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${props => props.theme.colors.grey};
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${props => props.theme.colors.grey};
  }
`;

const StyledForm = styled.form`
  width: 80%;
  padding-right: 5vw;
  padding-top: 50px;
  color: ${props => props.theme.colors.darkGrey};

  @media ${props => props.theme.device.phone} {
    width: 100%;
    padding: 0px;
  }
`;

const StyledGroup = styled.div`
  display: flex;
  position: relative;

  &:not(:last-child) {
      margin-bottom: 25px;
  }

  @media ${props => props.theme.device.phone} {
    flex-direction: column;
`;

const StyledLabel = styled.label`
  width: 20%;

  @media ${props => props.theme.device.phone} {
    padding-bottom: 10px;
  }
`;

const StyledInput = styled.input`
  ${placeholderColor};
  color: ${props => props.theme.colors.darkGrey};
  font-family: 'SofiaProRegular';
  font-size: 1em;
  border: 0;
  padding: 0 10px;
  width: 80%;
  border-bottom: solid ${props => (props.valid ? '1px' : '2px')}
    ${props =>
      props.valid
        ? ({ theme }) => theme.colors.darkGrey
        : ({ theme }) => theme.colors.red};

  @media ${props => props.theme.device.phone} {
    width: 100%;
  }
`;

const StyledTextArea = styled.textarea`
  ${placeholderColor};
  color: ${props => props.theme.colors.darkGrey};
  font-family: 'SofiaProRegular';
  font-size: 1em;
  width: 80%;
  padding: 10px;
  border: solid ${props => (props.valid ? '1px' : '2px')}
    ${props =>
      props.valid
        ? ({ theme }) => theme.colors.darkGrey
        : ({ theme }) => theme.colors.red};

  @media ${props => props.theme.device.phone} {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  font-family: 'SofiaProRegular';
  font-size: 1em;
  position: absolute
  right: 0;
  bottom: 0;
  padding: 10px;
  width: fit-content;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
    
    @media ${props => props.theme.device.tablet} {
      border-bottom: solid ${props => (props.valid ? '1px' : '2px')} 
      ${props =>
        props.valid
          ? ({ theme }) => theme.colors.darkGrey
          : ({ theme }) => theme.colors.red};
      border-right: solid ${props => (props.valid ? '1px' : '2px')}
      ${props =>
        props.valid
          ? ({ theme }) => theme.colors.darkGrey
          : ({ theme }) => theme.colors.red};
    } 
    
  }

  @media ${props => props.theme.device.phone} {
    margin-top: 25px;
    position: relative;
  }
`;

const Form = ({
  contact,
  github,
  startedTyping,
  validation,
  onStoreContact,
  setToggleForm,
  setToggleValid
}) => (
  <StyledForm
    onSubmit={e => {
      e.preventDefault();
      setToggleForm();
      if (github) {
        submitToSlack('/request', contact);
      } else {
        submitToSlack('/contact', contact);
      }
    }}>
    <StyledGroup>
      <StyledLabel htmlFor="Name">Name</StyledLabel>
      <StyledInput
        id="Name"
        type="text"
        placeholder="Enter your name"
        onChange={e => {
          onStoreContact({
            key: 'name',
            value: e.target.value
          });
          setValidationStyle(
            'name',
            e.target.value,
            validation.name,
            setToggleValid
          );
        }}
        value={contact.name}
        valid={validation.name || startedTyping === false}
        github={github}
      />
    </StyledGroup>
    <StyledGroup>
      <StyledLabel htmlFor="Email">Email</StyledLabel>
      <StyledInput
        id="Email"
        type="text"
        placeholder="Enter your emailaddress"
        onChange={e => {
          onStoreContact({
            key: 'email',
            value: e.target.value
          });
          setValidationStyle(
            'email',
            e.target.value,
            validation.email,
            setToggleValid
          );
        }}
        value={contact.email}
        valid={validation.email || startedTyping === false}
        github={github}
      />
    </StyledGroup>
    {github ? (
      <StyledGroup>
        <StyledLabel htmlFor="Name">Github</StyledLabel>
        <StyledInput
          id="Github"
          type="text"
          placeholder="Enter your github id"
          onChange={e => {
            onStoreContact({
              key: 'github',
              value: e.target.value
            });
            setValidationStyle(
              'github',
              e.target.value,
              validation.github,
              setToggleValid
            );
          }}
          value={contact.github}
          valid={validation.github || startedTyping === false}
          github={github}
        />
      </StyledGroup>
    ) : null}

    <StyledGroup>
      <StyledLabel htmlFor="Message">Message</StyledLabel>
      <StyledTextArea
        id="Message"
        type="text"
        placeholder="Your message"
        rows="9"
        onChange={e => {
          onStoreContact({
            key: 'message',
            value: e.target.value
          });
          setValidationStyle(
            'message',
            e.target.value,
            validation.message,
            setToggleValid
          );
        }}
        value={contact.message}
        valid={validation.message || startedTyping === false}
      />
      <StyledButton
        type="submit"
        disabled={!allFieldsValid(validation)}
        valid={validation.message || startedTyping === false}>
        Send
      </StyledButton>
    </StyledGroup>
  </StyledForm>
);

export default Form;
