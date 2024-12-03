import React from 'react';
import { ModalProvider } from './components/Modal';
import { LoaderProvider } from './components/Loader';
import { App } from './components/App';
import { ThemeProvider } from './components/Theme';
import { config } from './providers/config';

export const Root = () => {
  return (
    <>
      <ThemeProvider defaultTheme={config.siteConfig.defaultTheme}>
        <LoaderProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </LoaderProvider>
      </ThemeProvider>
    </>
  );
}