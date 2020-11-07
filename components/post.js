import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import styled from 'styled-components';

import { column } from '../styles/mixins';
import { spacing } from '../styles/vars';
import PageProgress from '../components/pageProgress';
import ImageGrid from '../components/imageGrid';

import Blockquote, { Citation } from './elements/blockquote';
import Code from './elements/code';
import Em from './elements/em';
import Footer from './footer';
import { H1, H2, H3 } from './elements/text';
import Img from './elements/img';
import Li from './elements/li';
import Link from './link';
import Nav from './nav';
import Ol from './elements/ol';
import Page from './page';
import Strong from './elements/strong';
import Ul from './elements/ul';
import Utterance from './Utterances';
//import Subscribe from './subscribe';

const components = {
  a: Link,
  blockquote: Blockquote,
  cite: Citation,
  em: Em,
  h1: H1,
  h2: H2,
  h3: H3,
  img: Img,
  li: Li,
  ol: Ol,
  pre: Code,
  strong: Strong,
  ul: Ul,
  ImageGrid,
};

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
        <MDXProvider components={components}>
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
