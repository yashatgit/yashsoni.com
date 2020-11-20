import React from 'react';
import styled from 'styled-components';

import Footer from '../components/footer';
import Main from '../components/main';
import Nav from '../components/nav';
import DefaultSEO from '../components/DefaultSEO';
import Article from '../components/article';
import { spacing } from '../styles/vars';
import { heading } from '../styles/mixins';

import { frontMatter as posts } from './til/**/*.mdx';

const StyledArticlesTitle = styled.h1`
  ${heading};
  color: var(--text1);
  font-size: 2.5em;
  margin-bottom: ${spacing.xxs};
`;

const StyledArticlesDesc = styled.p`
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
  const filteredPosts = posts
    .filter(blogPost => !!blogPost.title)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map(blogPost => ({ ...blogPost, slug: `/${blogPost.__resourcePath.replace('.mdx', '').replace('/index', '')}` }));

  return (
    <>
      <DefaultSEO
        url="https://yashsoni.com/til"
        description="Collection of small bits and pieces of knowledge I picked up on my way."
        title="Yash Soni - Today I Learned"
      />
      <Nav />
      <Main>
        <StyledArticles>
          <StyledArticlesTitle>Today I Learned</StyledArticlesTitle>
          <StyledArticlesDesc>
            This is just a collection of small bits and pieces of knowledge I picked up on my way. We learn something
            new every day, so I wanted to keep that gained knowledge accessible for later. It also makes sharing easier.
            Most of it is just random thoughts and code snippets, with links to further resources.
          </StyledArticlesDesc>
          <ul>
            {filteredPosts.map(article => (
              <Article article={article} key={article.slug} />
            ))}
          </ul>
        </StyledArticles>
      </Main>
      <Footer />
    </>
  );
};

export default Index;
