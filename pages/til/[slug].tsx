import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getFiles, getFileBySlug } from 'lib/mdx';
import components from 'components/MDXComponents';
import BlogLayout from 'layouts/blog';

export default function Blog({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <BlogLayout frontMatter={frontMatter}>
      <Component components={components as any} />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('til');
  // console.log({ posts });
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('til', params.slug);
  return { props: { ...post } };
}
