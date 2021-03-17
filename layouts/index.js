import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

import Container from '../components/Container';
import PageProgress from '../components/pageProgress';
import { H1, H5 } from '../components/elements/text';
import { full } from '../utils/date-format';

import Footer from '../components/footer';
import Nav from '../components/nav';
import BlogSeo from '../components/BlogSeo';

const LazyUtterances = dynamic(() => import('../components/Utterances'));

const StyledBlogDetails = styled(H5)`
  margin: 10px 0 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
`;

const StyledNameAvatar = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const BlogLayout = ({ children, frontMatter }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <BlogSeo frontMatter={frontMatter} />
      <PageProgress />
      <Nav />
      <Container>
        <H1>{frontMatter.title}</H1>
        <StyledBlogDetails>
          <StyledNameAvatar>
            <StyledAvatar>
              <img src="/static/images/yash_soni.jpg" />
            </StyledAvatar>
            {frontMatter.author || 'Yash Soni'} / {full(frontMatter.date)}
          </StyledNameAvatar>
          <div>{frontMatter.readingTime.text}</div>
        </StyledBlogDetails>
        <article>{children}</article>
        <hr ref={ref} />
        {inView && <LazyUtterances repo={'https://github.com/yashatgit/yashsoni.com'} type={'pathname'} />}
        <hr />
      </Container>
      <Footer />
    </>
  );
};

export default BlogLayout;
