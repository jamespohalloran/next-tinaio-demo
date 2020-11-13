
import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import { TinaCMS, TinaProvider, withTina } from 'tinacms';
import createClient from '../components/client';
import React from 'react';
import { TinacmsForestryProvider } from '@forestryio/client';
import Cookies from "js-cookie";

function App({ Component, pageProps }: AppProps) {
  
  
  return <TinacmsForestryProvider
  onLogin={() => {
    const headers = new Headers()

    //TODO - the token should could as a param from onLogin
    headers.append('Authorization', 'Bearer ' + Cookies.get("tinacms-auth"))
    return fetch('/api/preview', {
      method: 'POST',
      headers: headers,
    })
  }}
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

export default function _App(props: any) {

  const cms= new TinaCMS({
    apis: {
      forestry: createClient(true),
    },
    sidebar: props.pageProps.preview,
    enabled: true,
  })

  return <TinaProvider cms={cms}><App {...props}/></TinaProvider>
}