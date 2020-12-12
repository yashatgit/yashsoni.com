// https://3dbook.xyz/books/5fd49aeea535e40017cd5dd4

import React from 'react';
import styled, { css } from 'styled-components';

const StyledBookContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 600px;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const StyledBook = styled.div`
  ${props => css`
    width: 200px;
    height: 300px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(-${props.rotate}deg);
    transition: transform 1s ease;
    animation: 1s ease 0s 1 initAnimation;

    @keyframes initAnimation {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(-${props.rotate}deg);
      }
    }

    :hover {
      transform: rotateY(0deg);
    }

    > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 303px;
      transform: translateZ(25px);
      border-radius: 0 ${props.borderRadius} ${props.borderRadius} 0;
      box-shadow: 5px 5px 20px #aaaaaa;
      background-color: #01060f;
    }

    ::before {
      position: absolute;
      content: ' ';
      left: 0;
      top: 4px;
      width: 48px;
      height: 295px;
      transform: translateX(171px) rotateY(90deg);
      background: linear-gradient(
        90deg,
        #fff 0%,
        #f9f9f9 5%,
        #fff 10%,
        #f9f9f9 15%,
        #fff 20%,
        #f9f9f9 25%,
        #fff 30%,
        #f9f9f9 35%,
        #fff 40%,
        #f9f9f9 45%,
        #fff 50%,
        #f9f9f9 55%,
        #fff 60%,
        #f9f9f9 65%,
        #fff 70%,
        #f9f9f9 75%,
        #fff 80%,
        #f9f9f9 85%,
        #fff 90%,
        #f9f9f9 95%,
        #fff 100%
      );
    }

    ::after {
      position: absolute;
      top: 0;
      left: 0;
      content: ' ';
      width: 200px;
      height: 303px;
      transform: translateZ(-25px);
      background-color: #01060f;
      border-radius: 0 ${props.borderRadius} ${props.borderRadius} 0;
      box-shadow: -10px 0 50px 10px #aaaaaa;
    }
  `}
`;

const Book = ({ coverImage, bookTitle, borderRadius = '4px', rotate = '20' }) => {
  return (
    <StyledBookContainer borderRadius={borderRadius} rotate={rotate}>
      <StyledBook borderRadius={borderRadius} rotate={rotate}>
        <img alt={bookTitle} src={coverImage} />
      </StyledBook>
    </StyledBookContainer>
  );
};

export default Book;
