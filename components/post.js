import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import styled from 'styled-components';

import { column } from '../styles/mixins';
import { spacing } from '../styles/vars';
import PageProgress from '../components/pageProgress';

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
};

const Main = styled.main`
  ${column}
  padding: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

/*
const EditAndDiscuss = ({meta}) => {
    const editUrl = (slug) => `https://github.com/yashatgit/yashsoni.com/edit/master/pages/blog/${slug}.mdx`;
    const discussUrl = (slug) =>
        `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://yashsoni.com/blog/${slug}`)}`;

    return (
        <>
            <p>
                <Link href={discussUrl(meta.slug)} rel="noopener noreferrer" target="_blank">
                    {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(meta.slug)} rel="noopener noreferrer" target="_blank">
                    {'Edit on GitHub'}
                </Link>
            </p>
            <Subscribe />
        </>
    );
};
*/

const Post = ({ children, meta, hideProgressBar = false }) => (
  <Page date={meta.date} description={meta.description} image={meta.image} title={`${meta.title} - Yash Soni`}>
    {!hideProgressBar && <PageProgress />}
    <Nav />
    <Main>
      <MDXProvider components={components}>
        <article>{children}</article>
      </MDXProvider>
      <hr />
    </Main>
    <Footer />
  </Page>
);

export default Post;
