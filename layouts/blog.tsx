import Image from 'next/image';
import { format } from 'date-fns';
import LazyUtterances from 'components/comments/LazyUtterances';

import Container from 'components/Container';
// import ViewCounter from 'components/ViewCounter';

const editUrl = (slug) =>
  `https://github.com/yashatgit/yashsoni.com/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://yashsoni.com/blog/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Yash Soni`}
      description={frontMatter.summary}
      image={`https://yashsoni.com${frontMatter.image}`}
      date={new Date(frontMatter.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-row justify-between items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              alt="Yash Soni"
              height={30}
              width={30}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="text-sm md:text-md text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Yash Soni / '}
              {format(new Date(frontMatter.date), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-0">
            {frontMatter.readingTime.text}
            {/* {` • `}
            <ViewCounter slug={frontMatter.slug} /> */}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {/* <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `} */}
          {/* <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a> */}
        </div>
      </article>
      <div className="max-w-2xl mx-auto w-full">
        <LazyUtterances />
      </div>
    </Container>
  );
}
