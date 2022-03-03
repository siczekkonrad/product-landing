import '../styles/gotham-font.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import Head from 'next/head';


const EL = ({ children }: any) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {

  const Layout = (Component as any).Layout || EL;

  return (
    <React.Fragment>
      <Head>
        <title>Lenovo</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}

export default MyApp
