import React from 'react';
import styled from 'styled-components';

import { minMediaQuery } from '../styles/vars';

const PageProgressBar = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 4px;
  top: 0;
  left: 0;
  background-color: black;

  ${minMediaQuery.m} {
    display: block;
  }
`;

const Index = () => {
  const progressBarRef = React.useRef();

  const onScroll = React.useCallback(() => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBarRef.current && (progressBarRef.current.style.width = scrolled + '%');
  }, [progressBarRef.current]);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    progressBarRef.current && (progressBarRef.current.style.width = 0);
    () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <PageProgressBar ref={progressBarRef} id="progress-bar" />;
};

export default Index;
