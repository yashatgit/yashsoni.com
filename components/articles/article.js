import React from 'react';
import styled from 'styled-components';

import { spacing } from '../../styles/vars';
import { H3, H5 } from '../elements/text';
import Link from '../link';
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
      color: ${props => props.theme.accent};
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.text};

  :hover {
    color: ${props => props.theme.accent};
  }
`;

const Article = ({ article }) => (
  <StyledArticle>
    <StyledLink href={`/blog/${article.slug}`}>
      {/* <Date>{article.date}</Date> */}
      <H3>{article.title}</H3>
      {article.desc ? <H5>{article.desc}</H5> : ''}
    </StyledLink>
  </StyledArticle>
);

export default Article;
