import React from 'react';
import styled from 'styled-components';

import { column } from '../styles/mixins';
import PageProgress from '../components/pageProgress';
import MDXProvider from '../components/MDXProvider';
import Footer from '../components/footer';
import Nav from '../components/nav';
import Page from '../components/page';
import Date from '../components/date';
import Utterance from '../components/Utterances';

const Main = styled.main`
  ${column}
  padding: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const BlogLayout = ({ children, frontMatter }) => {
  const slug = frontMatter.__resourcePath.replace('.mdx', '');
  const { hideProgressBar, enableComments } = frontMatter;

  return (
    <Page {...frontMatter}>
      {!hideProgressBar && <PageProgress />}
      <Nav />
      <Main>
        <MDXProvider>
          <article>{children}</article>
        </MDXProvider>
        <hr />
        {enableComments ? (
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

export default BlogLayout;
