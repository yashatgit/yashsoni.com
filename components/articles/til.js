import React from 'react';
import styled from 'styled-components';

import {spacing} from '../../styles/vars';
//import Date from '../date';
import {H3, H5} from '../elements/text';
import Link from '../link';

const StyledArticle = styled.li`
    margin-bottom: ${spacing.normal};
    transition: all 0.15s ease;

    + li {
        margin: 2em 0 0;
    }

    h3 {
        margin: 0;
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
        <StyledLink href={`/til/${article.slug}`}>
            {/* <Date>{article.date}</Date> */}
            <H3>{article.title}</H3>
            {article.desc ? <H5>{`${article.desc} - ${article.ttr} read`}</H5> : ''}
        </StyledLink>
    </StyledArticle>
);

export default Article;
