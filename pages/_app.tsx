
import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import { withTina } from 'tinacms';
import createClient from '../components/client';
import React from 'react';
import { TinacmsForestryProvider } from '@forestryio/client';

function App({ Component, pageProps }: AppProps) {
  
  return <TinacmsForestryProvider
  onLogin={() => alert("enter edit mode")}
  onLogout={() => alert("exit edit mode")}
><Component {...pageProps} />
</TinacmsForestryProvider>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default withTina(App, {
  apis: {
    forestry: createClient(true),
  },
  sidebar: true,
  enabled: true,
});

