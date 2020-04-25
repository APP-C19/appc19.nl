import React from 'react';
import styled from 'styled-components';
import { contactData } from '../../../constants';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  font-weight: 300;
  margin: 1.6em 0;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.grey};

  img {
    margin-right: 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`;

export default () => (
  <div>
    <List>
      <Item>
        <img src="/static/icons/linkedin-gray.png" alt="linkedin" width="30" />
        <a
          href={contactData.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer">
          {contactData.linkedIn}
        </a>
      </Item>
      <Item>
        <img src="/static/icons/email-gray.png" alt="email" width="30" />
        <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
      </Item>
    </List>
  </div>
);
