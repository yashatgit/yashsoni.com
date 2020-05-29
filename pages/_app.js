import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { lightTheme, darkTheme } from '../styles/theme';

import '../styles/prism.css';

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
        <Component {...pageProps} />
      </AppWithTheme>
    );
  }
}

export default CustomApp;
