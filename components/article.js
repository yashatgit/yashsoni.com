import React from 'react';
import styled from 'styled-components';

import { spacing } from '../styles/vars';
import { H3, H5 } from './elements/text';
import Link from './link';
// import Date from '../date';

const StyledArticle = styled.li`
  margin-bottom: ${spacing.extrasmall};
  transition: all 0.15s ease;

  + li {
    margin: 2em 0 0;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 5px;
  }

  :hover {
    h3 {
      transition: all 0.15s ease;
      color: var(--accent);
    }
  }
`;

const StyledLink = styled(Link)`
  :hover {
    color: var(--accent);
    text-decoration: none !important;
  }
`;

const Article = ({ article, buildUrl }) => {
  const ttr = article.ttr ? ` • ⏱${article.ttr} read` : '';
  return (
    <StyledArticle>
      <StyledLink href={buildUrl(article.slug)}>
        {/* <Date>{article.date}</Date> */}
        <H3>{article.title}</H3>
        <H5>{`${article.description}${ttr}`}</H5>
      </StyledLink>
    </StyledArticle>
  );
};

export default Article;
