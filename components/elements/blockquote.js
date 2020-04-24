import styled from 'styled-components';

import {spacing} from '../../styles/vars';

const Blockquote = styled.blockquote`
    color: ${(props) => props.theme.subText};
    font-size: 1em;
    font-style: italic;
    font-weight: 400;
    letter-spacing: -1px;
    line-height: 1.48;
    padding-left: 50px;
    padding: ${spacing.extrasmall} ${spacing.normal};
    position: relative;
    margin: 10px 0;

    @media (min-width: 768px) {
        font-size: 1.2em;
    }

    p {
        color: ${(props) => props.theme.subText};
        margin: 0;
    }

    :after {
        content: '';
        height: 100%;
        width: 5px;
        background-color: ${(props) => props.theme.darkGrey};
        position: absolute;
        left: 0;
        top: 0;
    }
`;

export default Blockquote;
