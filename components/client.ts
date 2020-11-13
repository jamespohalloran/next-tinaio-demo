import { ForestryClient } from "@forestryio/client";

export default (preview: boolean, getTokenFn?: () => string) => new ForestryClient("e0a42c05-26b6-41d4-9c80-f62c829aabd7", {
  gqlServer: preview ? `https://content.tinajs.dev/github/awko/e0a42c05-26b6-41d4-9c80-f62c829aabd7` : `http://localhost:4001/graphql`,
  oauthHost: 'https://hydra.tinajs.dev:4444',
  identityHost: '/api/proxy',
  redirectURI: 'http://localhost:3000/',
  getTokenFn
});
