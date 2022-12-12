import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getFileBySlug } from 'lib/mdx';
import components from 'components/MDXComponents';
import MDXPageLayout from 'layouts/mdxPage';

export default function Uses({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <MDXPageLayout title="About – Yash Soni" description="Why this blog">
      <Component components={components as any} />
    </MDXPageLayout>
  );
}

export async function getStaticProps() {
  const about = await getFileBySlug('uses');
  return { props: about };
}
