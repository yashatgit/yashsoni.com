import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LogoJsonLd } from 'next-seo';

import { column } from '../styles/mixins';
import { spacing } from '../styles/vars';
import Nav from '../components/nav';

const Main = styled.main`
  display: flex;
  flex: 1;
`;

// https://jarv.is/notes/css-waving-hand-emoji/
const waveAnimation = keyframes`
0% { transform: rotate( 0.0deg) }
10% { transform: rotate(14.0deg) }  
20% { transform: rotate(-8.0deg) }
30% { transform: rotate(14.0deg) }
40% { transform: rotate(-4.0deg) }
50% { transform: rotate(10.0deg) }
60% { transform: rotate( 0.0deg) } 
100% { transform: rotate( 0.0deg) }
`;

const WavingHand = styled.span`
  animation-name: ${waveAnimation};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
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
    <Nav />
    <Main>
      <Content>
        <Container>
          <Title>Hello!</Title>
        </Container>
        <Details>
          Welcome to my personal slice of the internet <WavingHand>👋🏼</WavingHand>
        </Details>
      </Content>
    </Main>
    <LogoJsonLd logo="https://yashsoni.com/static/images/logo.png" url="https://yashsoni.com" />
  </>
);

export default Index;
