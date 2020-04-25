import React from 'react';
import Layout from '../../shared/components/Layout';
import HiddenH1 from '../../shared/components/Hidden';
import Contact from '../../shared/containers/Contact';
import StyledLinkInText from '../../shared/components/Links';
import { StyledH2 } from '../../shared/components/StyledHtmlTags';
import Section from '../../shared/components/Section';

export default () => (
  <Layout>
    <HiddenH1>Qollabor support page</HiddenH1>
    <Section>
      <StyledH2>Community Support</StyledH2>
      <p>
        Qollabor is continuously moving forward. We believe a technology
        platform like this can only survive if it is open source. Therefore
        Qollabor is licensed under the{' '}
        <StyledLinkInText
          href="https://www.mozilla.org/en-US/MPL/2.0/"
          target="_blank"
          rel="noopener noreferrer">
          MPL2 (Mozilla Public License 2.0)
        </StyledLinkInText>
        . Being an open source project Qollabor provides a space for its
        community to interact, if you want to get familiar with Qollabor the
        best way is to{' '}
        <StyledLinkInText
          href="https://community.cafienne.io/"
          target="_blank"
          rel="noopener noreferrer">
          join our community
        </StyledLinkInText>
        .
      </p>
    </Section>
    <Section>
      <StyledH2>Commercial Support</StyledH2>
      <p>
        Are you considering Qollabor as your Case Management solution? To every
        organisation that decide to adopt Qollabor, Qollabor or one of its
        implementation partners are able to provide you with support on CMMN,
        functional analysis, training and consultancy.
      </p>
      <p>
        Qollabor can offer support for all the aspect of your Qollabor
        implementation (from the modeling to the deployment of the final
        solution).
      </p>
      <p>Contact us in the contact section below.</p>
    </Section>
    <Section>
      <StyledH2>Qollabor Implementation Partner</StyledH2>
      <p>
        Are you a solution or service provider? You want to add Qollabor to your
        services portfolio? In order to ensure good understanding of the
        technologies and implementation approaches it is required that initial
        projects are supported by engineers of certified partners. After a
        successful implementation, Qollabor will certify you and your engineers.
        By certifying with Qollabor you'll be able to offer professional support
        for the modeling and technical solutions in Qollabor.
      </p>
      <p>Contact us in the contact section below.</p>
    </Section>
    <Section>
      <StyledH2>Contact</StyledH2>
      <Contact />
    </Section>
  </Layout>
);
