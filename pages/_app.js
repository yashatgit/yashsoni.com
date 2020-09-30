import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { lightTheme, darkTheme } from '../styles/theme';

import '../styles/prism.css';
import '../styles/libraryOverrides.css';

const AppWithTheme = ({ children }) => {
  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppWithTheme>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
        </Head>
        <Component {...pageProps} />
      </AppWithTheme>
    );
  }
}

export default CustomApp;
