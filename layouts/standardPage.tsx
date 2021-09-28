import Container from 'components/Container';

export default function MDXPageLayout({ children, title, description }) {
  return (
    <Container title={title} description={description}>
      <article className="max-w-2xl mx-auto mb-16 w-full max-w-6xl">
        {children}
      </article>
    </Container>
  );
}
