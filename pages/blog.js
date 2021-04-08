import React from 'react';

import Footer from '../components/footer';
import Container from '../components/Container';
import Nav from '../components/nav';
import Article from '../components/article';
import DefaultSEO from '../components/DefaultSEO';

import { frontMatter as blogPosts } from './blog/**/*.mdx';

const Index = () => {
  // console.log({ blogPosts });
  const filteredBlogPosts = blogPosts
    .filter(blogPost => blogPost.title)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map(blogPost => ({ ...blogPost, slug: `/${blogPost.__resourcePath.replace('.mdx', '').replace('/index', '')}` }));

  return (
    <>
      <DefaultSEO
        url="https://yashsoni.com/blog"
        description="Experiments on programming, tech, ML/AI and life in general."
        title="Yash Soni - Blog"
      />
      <Nav />
      <Container>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-1">Writing</h1>
          <ul>
            {filteredBlogPosts.map(article => (
              <Article article={article} key={article.slug} />
            ))}
          </ul>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Index;
