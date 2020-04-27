import React from 'react';
import styled from 'styled-components';
import RequestForm from './../../../shared/containers/Request';
import StyledLinkInText from '../../../shared/components/Links';
import { StyledH2 } from '../../../shared/components/StyledHtmlTags';
import Section from '../../../shared/components/Section';

const FlexWrapper = styled.div`
  display: flex;
  @media ${props => props.theme.device.phone} {
    display: block;
  }
`;

const Text = styled.div`
  width: 75%;

  @media ${props => props.theme.device.phone} {
    width: 100%;
  }
`;

const Image = styled.div`
  margin-top: 55px;
  width: 25%;
  display: flex;
  justify-content: center;

  @media ${props => props.theme.device.phone} {
    margin: auto;
    padding-top: 50px;
  }
`;

export default () => (
  <div>
    <Section>
      <FlexWrapper>
        <Text>
          <StyledH2>APP-C19 is an OpenSource initiative</StyledH2>
          <p>
            In the current pandemic situation we need to join forces to 
            fight the virus. Currently a large number of coultries are in
            lockdown. 
          </p>
          <p>
            In order to safely come out of the lockdown intelligent solutions 
            such as tracking apps or registration apps might be helpful. 
          </p>
           <p>
            APP-C19 builds tooling to help against spreading the virus {' '}
            Doing this, we buid apps to help in varios parts of the battle.
          </p>
           Our github repo is at {' '}
           <StyledLinkInText
              href="https://github.com/APP-C19"
              target="_blank"
              rel="noopener noreferrer">
              APP-C19
            </StyledLinkInText>
            We have a slack channel at {' '}
           <StyledLinkInText
              href="https://APP-C19.slack.com"
              target="_blank"
              rel="noopener noreferrer">
              APP-C19
            </StyledLinkInText>
        </Text>
        <Image>
          <img
            src="/static/icons/folder.png"
            width="120"
            height="100"
            alt="icon of cafienne"
          />
        </Image>
      </FlexWrapper>
    </Section>
    <Section>
      <FlexWrapper>
        <Text>
          <StyledH2>Community</StyledH2>
          <p>
            APP-C19 is an open source app and has an active community. This way we can
            ensure that we have a continuous development for the product(s) and a
            good focus on quality and interoperability.
          </p>
        </Text>
        <Image>
          <img
            src="/static/icons/community.png"
            width="100"
            height="100"
            alt="icon of a community"
          />
        </Image>
      </FlexWrapper>
    </Section>
    <Section>
      <Text>
        <StyledH2>Getting Started</StyledH2>
        <p>
          Now you want to get started right? Just fill out the form below and we
          will grant you access to our Github repository.
        </p>
      </Text>
      <RequestForm />
    </Section>
  </div>
);
