import React from 'react';

import Footer from '../components/footer';
import Container from '../components/Container';
import Nav from '../components/nav';
import DefaultSEO from '../components/DefaultSEO';
import Article from '../components/article';

import { frontMatter as posts } from './til/**/*.mdx';

const Index = () => {
  const filteredPosts = posts
    .filter(blogPost => !!blogPost.title)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map(blogPost => ({ ...blogPost, slug: `/${blogPost.__resourcePath.replace('.mdx', '').replace('/index', '')}` }));

  return (
    <>
      <DefaultSEO
        url="https://yashsoni.com/til"
        description="Collection of small bits and pieces of knowledge I picked up on my way."
        title="Yash Soni - Today I Learned"
      />
      <Nav />
      <Container>
        <section>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 lg:mb-4 text-1">Today I Learned</h1>
          <div className="mb-6 text-sm md:text-base">
            This is just a collection of small bits and pieces of knowledge I picked up on my way. We learn something
            new every day, so I wanted to keep that gained knowledge accessible for later. It also makes sharing easier.
            Most of it is just random thoughts and code snippets, with links to further resources.
          </div>
          <ul>
            {filteredPosts.map(article => (
              <Article article={article} key={article.slug} />
            ))}
          </ul>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Index;
