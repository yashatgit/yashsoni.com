import React from 'react';

import Container from '../components/Container';
import PageProgress from '../components/pageProgress';
import MDXProvider from '../components/MDXProvider';
import Footer from '../components/footer';
import Nav from '../components/nav';
import Page from '../components/page';
import Date from '../components/date';
import Utterance from '../components/Utterances';

const BlogLayout = ({ children, frontMatter }) => {
  return (
    <Page {...frontMatter}>
      <PageProgress />
      <Nav />
      <Container>
        <MDXProvider>
          <article>{children}</article>
        </MDXProvider>
        <hr />
        <Utterance repo={'https://github.com/yashatgit/yashsoni.com'} type={'pathname'} />
        <hr />
      </Container>
      <Footer />
    </Page>
  );
};

export default BlogLayout;
