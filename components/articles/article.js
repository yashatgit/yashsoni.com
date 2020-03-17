import React from 'react';
import styled from 'styled-components';

import {spacing} from '../../styles/vars';
import Date from '../date';
import {H3} from '../elements/text';
import Link from '../link';

const StyledArticle = styled.li`
    margin-bottom: ${spacing.normal};
    transition: all 0.15s ease;

    + li {
        margin: 2em 0 0;
    }

    h3 {
        margin-top: 0;
    }

    :hover {
        h3 {
            transition: all 0.15s ease;
            color: ${(props) => props.theme.accent};
        }
    }
`;

const StyledLink = styled(Link)`
    color: ${(props) => props.theme.text};

    :hover {
        color: ${(props) => props.theme.accent};
    }
`;

const Article = ({article}) => (
    <StyledArticle>
        <StyledLink href={`/blog/${article.slug}`}>
            <Date>{article.date}</Date>
            <H3>{article.title}</H3>
        </StyledLink>
    </StyledArticle>
);

export default Article;
