import React from 'react';
import styled from 'styled-components';

import A from './a';
import { heading } from '../../styles/mixins';
import { spacing } from '../../styles/vars';

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

const StyledAnchor = styled(A)`
  margin-left: 5px;
  opacity: 0;
  transition: opacity 0.3s;
  text-decoration: none;
  font-weight: normal;

  ${StyledH2}:hover & {
    opacity: 100;
  }
  ${StyledH3}:hover & {
    opacity: 100;
  }
  ${StyledH4}:hover & {
    opacity: 100;
  }
  ${StyledH5}:hover & {
    opacity: 100;
  }
`;

const HeadingWithAnchor = Component => ({ children, ...restProps }) => (
  <Component {...restProps}>
    {children}
    {restProps.id && <StyledAnchor href={`#${restProps.id}`}>#</StyledAnchor>}
  </Component>
);

export const H1 = StyledH1;
export const H2 = HeadingWithAnchor(StyledH2);
export const H3 = HeadingWithAnchor(StyledH3);
export const H4 = HeadingWithAnchor(StyledH4);
export const H5 = HeadingWithAnchor(StyledH5);
