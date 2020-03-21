import styled from 'styled-components';

import {spacing} from '../../styles/vars';

const Blockquote = styled.blockquote`
    color: #333;
    font-size: 1em;
    font-style: italic;
    font-weight: 500;
    letter-spacing: -0.012em;
    line-height: 1.48;
    padding-left: 50px;
    padding: ${spacing.extrasmall} ${spacing.normal};

    @media (min-width: 768px) {
        font-size: 1.2em;
    }

    :after {
        content: '';
        height: 100%;
        width: 10px;
        background-color: ${(props) => props.theme.code};
        position: absolute;
        left: 0;
        top: 0;
    }
`;

export default Blockquote;
