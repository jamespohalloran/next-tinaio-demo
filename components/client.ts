import { ForestryClient } from "@forestryio/client";

export default (preview: boolean, getTokenFn?: () => string) => new ForestryClient(process.env.NEXT_PUBLIC_TINA_CLIENT_ID, {
  gqlServer: preview ? `https://content.tinajs.dev/github/${process.env.NEXT_PUBLIC_REALM_NAME}/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}` : `http://localhost:4001/graphql`,
  oauthHost: 'https://hydra.tinajs.dev:4444',
  identityHost: '/api/proxy',
  redirectURI: process.env.NEXT_PUBLIC_HOMEPAGE_URL || "http://localhost:3000/",
  getTokenFn
});
