import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import GoogleFonts from 'next-google-fonts';

import { GA_TRACKING_ID } from '../lib/gtag';
import Script from '../components/Script';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // eslint-disable-next-line no-param-reassign
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="application-name" content="yashsoni.com" />

          {/* https://github.com/gokulkrishh/awesome-meta-and-manifest? */}
          {/* <!-- iOS --> */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          {/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> */}
          <meta name="apple-mobile-web-app-title" content="yashsoni.com" />

          {/* <!-- Android  --> */}
          <meta name="theme-color" content="#000000" />
          <meta name="mobile-web-app-capable" content="yes" />

          {/* <!-- Windows  --> */}
          <meta name="msapplication-config" content="/static/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-tap-highlight" content="no" />

          <link href="/static/site.webmanifest" rel="manifest" />
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />

          {/* <!-- Pinned Tab  --> */}
          <link color="#000000" href="/static/favicons/safari-pinned-tab.svg" rel="mask-icon" />

          <link href="/static/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />

          {/* <!-- Main Link Tags  --> */}
          <link href="/static/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/static/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />

          <meta content="summary_large_image" name="twitter:card" />
          <meta content="@yashs0ni" name="twitter:site" />
          <meta content="@yashs0ni" name="twitter:creator" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          {/* <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,700&display=swap" rel="stylesheet" /> */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <Script>
            {() => {
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            }}
          </Script>
        </Head>
        <body>
          <Script>
            {() => {
              // //https://github.com/donavon/use-dark-mode/blob/develop/noflash.js.txt
              // Change these if you use something different in your hook.
              var storageKey = 'darkMode';
              var classNameDark = 'dark-mode';
              var classNameLight = 'light-mode';

              function setClassOnDocumentBody(darkMode) {
                document.body.classList.add(darkMode ? classNameDark : classNameLight);
                document.body.classList.remove(darkMode ? classNameLight : classNameDark);
              }

              var preferDarkQuery = '(prefers-color-scheme: dark)';
              var mql = window.matchMedia(preferDarkQuery);
              var supportsColorSchemeQuery = mql.media === preferDarkQuery;
              var localStorageTheme = null;
              try {
                localStorageTheme = localStorage.getItem(storageKey);
              } catch (err) {}
              var localStorageExists = localStorageTheme !== null;
              if (localStorageExists) {
                localStorageTheme = JSON.parse(localStorageTheme);
              }

              // Determine the source of truth
              if (localStorageExists) {
                // source of truth from localStorage
                setClassOnDocumentBody(localStorageTheme);
              } else if (supportsColorSchemeQuery) {
                // source of truth from system
                setClassOnDocumentBody(mql.matches);
                localStorage.setItem(storageKey, mql.matches);
              } else {
                // source of truth from document.body
                var isDarkMode = document.body.classList.contains(classNameDark);
                localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
              }
            }}
          </Script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
