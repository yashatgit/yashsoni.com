import React from 'react';
import Container from '../components/Container';

// https://jarv.is/notes/css-waving-hand-emoji/
const mainPageStyles = () => {
  return (
    <style jsx>{`
      .wavingHand {
        animation-name: waveAnimation;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
        display: inline-block;
      }

      @keyframes waveAnimation {
        0% {
          transform: rotate(0deg);
        }
        10% {
          transform: rotate(14deg);
        }
        20% {
          transform: rotate(-8deg);
        }
        30% {
          transform: rotate(14deg);
        }
        40% {
          transform: rotate(-4deg);
        }
        50% {
          transform: rotate(10deg);
        }
        60% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    `}</style>
  );
};

const description = 'Yash Soni is a developer and a UI/UX enthusiast.';

const Index = () => (
  <>
    <Container
      hideFooter
      overrides={{
        containerClass: 'flex flex-1 flex-col text-black dark:text-white',
        hideFooter: true,
        mainClass: 'flex-1 -mt-8'
      }}
    >
      {mainPageStyles()}
      <div className="max-w-6xl justify-center flex flex-1 flex-col m-auto w-full mb-2 p-1">
        <div className="flex flex-col">
          <div className="text-3xl font-semibold text-center">
            Hello! <span className="wavingHand">👋🏼</span>
          </div>
          <div className="m-auto text-center mt-2">
            Welcome to my personal slice of the internet.
          </div>
        </div>
      </div>
    </Container>
  </>
);

export default Index;
