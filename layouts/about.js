import React from 'react';

import Container from '../components/Container';
import MDXProvider from '../components/MDXProvider';
import Footer from '../components/footer';
import Nav from '../components/nav';
import DefaultSEO from '../components/DefaultSEO';

const AboutPageLayout = ({ children }) => {
  return (
    <>
      <DefaultSEO url="https://yashsoni.com/about" title="About Me – Yash Soni" />
      <Nav />
      <Container>
        <MDXProvider>
          <article>{children}</article>
        </MDXProvider>
      </Container>
      <Footer />
    </>
  );
};

export default AboutPageLayout;
