import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { useRouter } from 'next/router';

//https://github.com/garmeeh/next-seo#default-seo-configuration
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import * as gtag from '../lib/gtag';

import MDXProvider from '../components/MDXProvider';

import { lightTheme, darkTheme } from '../styles/theme';
import GlobalStyle from '../components/GlobalStyle';
import '../styles/global.css';
import '../styles/prism.css';
import '../styles/libraryOverrides.css';

const AppWithTheme = ({ children }) => {
  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const CustomApp = ({ Component, pageProps }) => {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AppWithTheme>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
      </Head>
      <MDXProvider>
        <GlobalStyle />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MDXProvider>
    </AppWithTheme>
  );
};

export default CustomApp;
