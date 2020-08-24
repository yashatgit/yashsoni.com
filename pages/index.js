import React from 'react';
import styled from 'styled-components';
import { LogoJsonLd } from 'next-seo';

import Page from '../components/page';
import { column } from '../styles/mixins';
import { spacing } from '../styles/vars';
import Nav from '../components/nav';

const Main = styled.main`
  display: flex;
  flex: 1;
`;

const Content = styled.div`
    ${column}
    margin-bottom: ${spacing.normal};
    padding: ${spacing.normal};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

// const Subtitle = styled.h2`
//     text-align: center;
//     font-style: italic;
//     margin: 0;
//     color: var(--accent);
//     letter-spacing: 0.03;
// `;

const Title = styled.h1`
  display: initial;
  font-size: 1.65em;
  text-align: center;
  line-height: 1.35;
  font-weight: bold;
  margin: 0 auto;

  @media (min-width: 737px) {
    font-size: 2.3em;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

const Details = styled.div`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: ${spacing.extrasmall};
`;

const description = 'Yash Soni is a developer and a UI/UX enthusiast.';

const Index = () => (
  <>
    <Page description={description} image="/static/images/speaking/speaking.jpg" title="Yash Soni">
      <Nav />
      <Main>
        <Content>
          <Container>
            <Title>Hello!</Title>
          </Container>
          <Details>Welcome to my personal slice of the internet 👋🏼</Details>
        </Content>
      </Main>
    </Page>
    <LogoJsonLd logo="https://yashsoni.com/static/images/logo.png" url="https://yashsoni.com" />
  </>
);

export default Index;
