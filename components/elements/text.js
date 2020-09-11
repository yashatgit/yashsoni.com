import React from 'react';
import styled from 'styled-components';

import { heading } from '../../styles/mixins';
import { spacing } from '../../styles/vars';

const createId = text => text.toLowerCase().replace(/ /gu, '-');

const StyledH1 = styled.h1`
  ${heading};
  color: var(--titleText);
  font-size: 32px;
  margin: 0;
  line-height: 1.35;

  @media (min-width: 768px) {
    font-size: 2.5em;
  }
`;

const StyledH2 = styled.h2`
  ${heading};
  color: var(--titleText);
  font-size: 1.4em;
  margin: ${spacing.large} 0 ${spacing.small};
  line-height: 1.25;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const StyledH3 = styled.h3`
  ${heading};
  color: var(--titleText);
  font-size: 20px;
  margin: ${spacing.normal} 0 ${spacing.small};

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const StyledH4 = styled.h4`
  ${heading};
  color: var(--titleText);
  font-size: 18px;
`;

const StyledH5 = styled.h4`
  color: var(--text2);
  font-size: 16px;
  font-weight: 500;
`;

export const H1 = ({ children }) => <StyledH1>{children}</StyledH1>;
export const H2 = ({ children }) => <StyledH2 id={createId(children)}>{children}</StyledH2>;
export const H3 = ({ children }) => <StyledH3 id={createId(children)}>{children}</StyledH3>;
export const H4 = ({ children }) => <StyledH4>{children}</StyledH4>;
export const H5 = ({ children }) => <StyledH5>{children}</StyledH5>;
