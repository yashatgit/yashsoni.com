import React from 'react';
import styled from 'styled-components';

import { column } from '../styles/mixins';
import PageProgress from '../components/pageProgress';
import MDXProvider from './MDXProvider';

import Footer from './footer';
import Nav from './nav';
import Page from './page';
import Utterance from './Utterances';

const Main = styled.main`
  ${column}
  padding: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Post = ({ children, meta, enableComments, hideProgressBar = false, type }) => {
  const enableDiscussions = type === 'BLOG';
  return (
    <Page
      date={meta.date}
      keywords={meta.keywords}
      description={meta.description}
      image={meta.image}
      title={`${meta.title} - Yash Soni`}
    >
      {!hideProgressBar && <PageProgress />}
      <Nav />
      <Main>
        <MDXProvider>
          <article>{children}</article>
        </MDXProvider>
        <hr />
        {enableDiscussions || enableComments ? (
          <>
            <Utterance repo={'https://github.com/yashatgit/yashsoni.com'} type={'pathname'} />
            <hr />
          </>
        ) : null}
      </Main>
      <Footer />
    </Page>
  );
};

export default Post;
