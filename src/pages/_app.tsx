import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "../../styles/Global";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/static/favicon.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
        rel="stylesheet"
      ></link>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://app.luftio.com/" />
      <meta property="og:title" content="Lorem ipsum" />
      <meta property="og:description" content="Lorem ipsum" />
      <meta
        property="og:image"
        content="SEM PAK DÁMEE NĚJAKOU HEZKOU GRAFIKU"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://app.luftio.com" />
      <meta property="twitter:title" content="Lorem ipsum" />
      <meta property="twitter:description" content="Lorem ipsum" />
      <meta
        property="twitter:image"
        content="SEM PAK DÁMEE NĚJAKOU HEZKOU GRAFIKU"
      ></meta>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;
