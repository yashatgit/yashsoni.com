import styled from 'styled-components';

import { spacing } from '../../styles/vars';

const Blockquote = styled.blockquote`
  color: ${props => props.theme.subText};
  font-size: 1em;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 1.48;
  padding-left: 50px;
  padding: ${spacing.small} ${spacing.extrasmall};
  position: relative;
  margin: 16px 0;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }

  p {
    color: ${props => props.theme.text};
    margin: 0;
  }

  :after {
    content: '';
    height: 100%;
    width: 2px;
    background-color: ${props => props.theme.quoteHighlight};
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const Citation = styled.cite`
  font-style: italic;
  font-size: 0.8em;
  color: ${props => props.theme.subText};
  font-weight: 400;
`;

export default Blockquote;
