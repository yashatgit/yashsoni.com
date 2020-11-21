import React from 'react';
import styled from 'styled-components';

import Link from './elements/link';

const StyledFooter = styled.footer`
  flex-shrink: 0;
  text-align: center;
`;

const Container = styled.div`
  padding: 30px 20px;

  @media (min-width: 737px) {
    margin: 0 auto;
    max-width: 41em;
    padding: 45px;
  }
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <Link href="/">yashsoni.com</Link>
    </Container>
  </StyledFooter>
);

export default Footer;
