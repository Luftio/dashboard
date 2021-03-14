import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import GlobalStyle from "../../shared/Global";
import theme from "../../config/theme";

Sentry.init({
  dsn: "https://cad8d186d4894cefa24e91776672611c@o550006.ingest.sentry.io/5673158",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
  release: "luftio-dashboard@" + process.env.npm_package_version,
  environment: "production",
});

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
        rel="stylesheet"
      ></link>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://app.luftio.com/" />
      <meta property="og:title" content="Lorem ipsum" />
      <meta property="og:description" content="Lorem ipsum" />
      <meta property="og:image" content="SEM PAK DÁMEE NĚJAKOU HEZKOU GRAFIKU" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://app.luftio.com" />
      <meta property="twitter:title" content="Lorem ipsum" />
      <meta property="twitter:description" content="Lorem ipsum" />
      <meta property="twitter:image" content="SEM PAK DÁMEE NĚJAKOU HEZKOU GRAFIKU"></meta>
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;