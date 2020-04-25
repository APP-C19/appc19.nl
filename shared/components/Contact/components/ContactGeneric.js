import React from 'react';
import styled from 'styled-components';
import ContactData from './ContactData';
import StyledLinkInText from '../../../../shared/components/Links';
import Form from './Form';

const StyledP = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.green};
  }
`;

const TwoColumn = styled.div`
  display: flex;
`;

const SideNotes = styled.div`
  width: 35%;
  padding-left: 5vw;
  border-left: 1px solid ${({ theme }) => theme.colors.grey};

  @media ${props => props.theme.device.phone} {
    display: none;
  }
`;

const Confirmation = github => {
  if (github) {
    return (
      <div>
        <p>
          <i>Thank you for your request!</i>
        </p>
        <p>
          While waiting for access take a look at the{' '}
          <StyledLinkInText
            href="https://oxygene-space.github.io/docs/ShortIntroduction.html"
            target="_blank"
            rel="noopener noreferrer">
            reference guide
          </StyledLinkInText>
          .
        </p>
      </div>
    );
  }
  return (
    <StyledP>
      <strong>Thank you, we will contact you shortly</strong>
    </StyledP>
  );
};

const Contact = ({
  contact = {},
  github = false,
  formSend = false,
  startedTyping = false,
  validation = {},
  onStoreContact = () => {},
  setToggleForm = () => {},
  setToggleValid = () => {}
}) => (
  <TwoColumn>
    {!formSend ? (
      <Form
        contact={contact}
        github={github}
        startedTyping={startedTyping}
        validation={validation}
        onStoreContact={onStoreContact}
        setToggleForm={setToggleForm}
        setToggleValid={setToggleValid}
      />
    ) : (
      Confirmation(github)
    )}
    {github ? null : (
      <SideNotes>
        <ContactData />
      </SideNotes>
    )}
  </TwoColumn>
);

export default Contact;
