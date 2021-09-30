import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from 'components/Header';
import Footer from 'components/Footer';

export default function Container(props) {
  const { children, overrides = {}, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Yash Soni',
    description: 'Yash Soni is a developer and a UI/UX enthusiast.',
    image: 'https://yashsoni.com/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className={`bg-white dark:bg-black ${overrides.containerClass}`}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yashsoni.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://yashsoni.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Yash Soni" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yashs0ni" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Header />
      <main
        id="skip"
        className={`flex flex-col justify-center px-4 md:px-8 bg-white dark:bg-black ${overrides.mainClass}`}
      >
        {children}
        {!overrides.hideFooter ? <Footer /> : ''}
      </main>
    </div>
  );
}
