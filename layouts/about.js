import React from 'react';

import Container from '../components/Container';
import MDXProvider from '../components/MDXProvider';
import Footer from '../components/footer';
import Nav from '../components/nav';
import Page from '../components/page';

const BlogLayout = ({ children, frontMatter }) => {
  return (
    <Page {...frontMatter}>
      <Nav />
      <Container>
        <MDXProvider>
          <article>{children}</article>
        </MDXProvider>
      </Container>
      <Footer />
    </Page>
  );
};

export default BlogLayout;
