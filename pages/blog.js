import React from 'react';
import styled from 'styled-components';

import Footer from '../components/footer';
import Container from '../components/Container';
import Nav from '../components/nav';
import Article from '../components/article';
import DefaultSEO from '../components/DefaultSEO';

import { spacing } from '../styles/vars';
import { heading } from '../styles/mixins';

import { frontMatter as blogPosts } from './blog/**/*.mdx';

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

const Index = () => {
  const filteredBlogPosts = blogPosts
    .filter(blogPost => blogPost.title)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map(blogPost => ({ ...blogPost, slug: `/${blogPost.__resourcePath.replace('.mdx', '').replace('/index', '')}` }));

  return (
    <>
      <DefaultSEO
        url="https://yashsoni.com/blog"
        description="Experiments on programming, tech, ML/AI and life in general."
        title="Yash Soni - Blog"
      />
      <Nav />
      <Container>
        <StyledArticles>
          <StyledArticlesTitle>Writing</StyledArticlesTitle>
          <ul>
            {filteredBlogPosts.map(article => (
              <Article article={article} key={article.slug} />
            ))}
          </ul>
        </StyledArticles>
      </Container>
      <Footer />
    </>
  );
};

export default Index;
