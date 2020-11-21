import React from 'react';

import Container from '../components/Container';
import PageProgress from '../components/pageProgress';

import Footer from '../components/footer';
import Nav from '../components/nav';
import BlogSeo from '../components/BlogSeo';
import Date from '../components/date';
import Utterance from '../components/Utterances';

const BlogLayout = ({ children, frontMatter }) => {
  return (
    <>
      <BlogSeo frontMatter={frontMatter} />
      <PageProgress />
      <Nav />
      <Container>
        <article>{children}</article>
        <hr />
        <Utterance repo={'https://github.com/yashatgit/yashsoni.com'} type={'pathname'} />
        <hr />
      </Container>
      <Footer />
    </>
  );
};

export default BlogLayout;
