import { ForestryClient, DEFAULT_LOCAL_TINA_GQL_SERVER_URL } from "@forestryio/client";

const client = (preview: boolean, getTokenFn?: () => string) => new ForestryClient(
{
  realm: process.env.NEXT_PUBLIC_REALM_NAME, 
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, 
  redirectURI: typeof window === 'undefined' ? '' : window.location.href, 
  customAPI: preview ? undefined : DEFAULT_LOCAL_TINA_GQL_SERVER_URL,
  identityProxy: '/api/proxy',
  getTokenFn
})


export default client