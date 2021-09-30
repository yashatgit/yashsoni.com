import { useState } from 'react';

import Container from 'components/Container';

import Article from 'components/article';
import { getAllFilesFrontMatter } from 'lib/mdx';

export default function Blog({ posts }) {
  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((post) => !!post.title);

  return (
    <Container
      title="Yash Soni - Blog"
      description="Experiments on programming, tech, ML/AI and life in general."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 text-black dark:text-white w-full">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Writing
        </h3>
        <div className="w-full">
          {filteredBlogPosts.map((article) => (
            <Article basePath="blog" article={article} key={article.slug} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
