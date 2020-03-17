import React from 'react';
import styled from 'styled-components';

import {heading} from '../../styles/mixins';
import {spacing} from '../../styles/vars';
import titleStyle from '../../utils/title-style';

const createId = (text) => text.toLowerCase().replace(/ /gu, '-');

const StyledH1 = styled.h1`
    ${heading};
    color: ${(props) => props.theme.text};
    font-size: 32px;
    margin: 0;
    line-height: 1.35;

    @media (min-width: 768px) {
        font-size: 2.5em;
    }
`;

const StyledH2 = styled.h2`
    ${heading};
    color: ${(props) => props.theme.text};
    font-size: 1.4em;
    margin: ${spacing.large} 0 ${spacing.small};
    line-height: 1.25;

    @media (min-width: 768px) {
        font-size: 36px;
    }
`;

const StyledH3 = styled.h3`
    ${heading};
    color: ${(props) => props.theme.text};
    font-size: 20px;
    margin: ${spacing.normal} 0 ${spacing.small};

    @media (min-width: 768px) {
        font-size: 24px;
    }
`;

const StyledH4 = styled.h4`
    ${heading};
    color: ${(props) => props.theme.text};
    font-size: 18px;
`;

export const H1 = ({children}) => <StyledH1>{titleStyle(children)}</StyledH1>;

export const H2 = ({children}) => <StyledH2 id={createId(children)}>{titleStyle(children)}</StyledH2>;
export const H3 = ({children}) => <StyledH3 id={createId(children)}>{titleStyle(children)}</StyledH3>;
export const H4 = ({children}) => <StyledH4>{titleStyle(children)}</StyledH4>;
