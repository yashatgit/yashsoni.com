import React from 'react';
import styled from 'styled-components';

import Footer from '../components/footer';
import Main from '../components/main';
import Nav from '../components/nav';
import Page from '../components/page';
import Article from '../components/article';
import articles from '../data/blog_data';
import { spacing } from '../styles/vars';
import { heading } from '../styles/mixins';

const StyledArticlesTitle = styled.h1`
  ${heading};
  color: var(--text1);
  font-size: 2.5em;
  margin-bottom: ${spacing.large};
`;

const StyledArticles = styled.section`
  margin-bottom: ${spacing.normal};
  vertical-align: top;

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const Index = () => (
  <Page description="Experiments on programming, tech, ML/AI and life in general." title="Yash Soni - Blog">
    <Nav />
    <Main>
      <StyledArticles>
        <StyledArticlesTitle>Writing</StyledArticlesTitle>
        <ul>
          {articles.map(article => (
            <Article article={article} key={article.slug || article.url} buildUrl={slug => `/blog/${slug}`} />
          ))}
        </ul>
      </StyledArticles>
    </Main>
    <Footer />
  </Page>
);

export default Index;
