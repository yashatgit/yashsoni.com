import Container from 'components/Container';
// import BlogPost from 'components/BlogPost';
import Article from 'components/article';
import { getAllFilesFrontMatter } from 'lib/mdx';

export default function TodayILearned({ posts }) {
  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter((post) => !!post.title);

  return (
    <Container
      description="Collection of small bits and pieces of knowledge I picked up on my way."
      title="Yash Soni - Today I Learned"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 text-black dark:text-white w-full">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Today I Learned
        </h3>
        <div className="mb-6 text-sm md:text-base">
          This is just a collection of small bits and pieces of knowledge I
          picked up on my way. We learn something new every day, so I wanted to
          keep that gained knowledge accessible for later. It also makes sharing
          easier. Most of it is just random thoughts and code snippets, with
          links to further resources.
        </div>

        {filteredBlogPosts.map((article) => (
          <Article basePath="til" article={article} key={article.slug} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('til');

  return { props: { posts } };
}
