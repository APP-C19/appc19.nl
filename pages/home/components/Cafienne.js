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
          <StyledH2>C19-APP is an OpenSource initiative</StyledH2>
          <p>
            C19-APP builds tooling to help against spreading the virus {' '}
            <StyledLinkInText
              href="https://www.omg.org/spec/CMMN/"
              target="_blank"
              rel="noopener noreferrer">
              CMMN specifications
            </StyledLinkInText>
            . Doing this, it offers the user tasks he must perform, tasks he may
            perform and tasks he may choose to perform. And, the case engine
            keeps track of all the information that is added to the Case File
            during its lifecycle.
          </p>
          <p>
            Also, you can create a team of case workers for the specific case.
            To this team, you can add people from within your own organisation
            but also from outside it.
          </p>
          <StyledLinkInText
            href="https://oxygene-space.github.io/docs/ShortIntroduction.html"
            target="_blank"
            rel="noopener noreferrer">
            {' '}
            &gt; Read more about it in our reference guide.
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
          <StyledH2>When to use Qollabor</StyledH2>
          <p>
            You can use Qollabor when your organisation works with Cases,
            building up Case Files and cooperates in a team. You can use
            Qollabor when your User Interface should in a glance give you an
            overview of the whole case, of what has been done, what can be done
            and what must be done, of all the information that is in the Case
            File and that is related to the work that you are doing. You should
            use Qollabor if you want to build up a case team, and –as a case
            manager– want to keep all of them involved in the proceeding of the
            case. You want to use Qollabor if you want to build up an auditable
            track of what case workers contributed to solving the case.
          </p>
          <StyledLinkInText
            href="https://oxygene-space.github.io/docs/ShortIntroduction.html"
            target="_blank"
            rel="noopener noreferrer">
            {' '}
            &gt; Read more about it in our reference guide.
          </StyledLinkInText>
        </Text>
        <Image>
          <img
            src="/static/icons/tools.png"
            width="100"
            height="100"
            alt="icon of a set of using cafienne"
          />
        </Image>
      </FlexWrapper>
    </Section>
    <Section>
      <FlexWrapper>
        <Text>
          <StyledH2>Community</StyledH2>
          <p>
            Qollabor is open source and has an active community. This way we can
            ensure that we have a continuous development for the product and a
            good focus on quality and interoperability.
          </p>
          <StyledLinkInText
            href="https://community.cafienne.io/"
            target="_blank"
            rel="noopener noreferrer">
            {' '}
            &gt; Join our community.
          </StyledLinkInText>
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