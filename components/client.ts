import { ForestryClient } from "@forestryio/client";

const client = new ForestryClient("e0a42c05-26b6-41d4-9c80-f62c829aabd7", {
  gqlServer: `https://content.tinajs.dev/awko/e0a42c05-26b6-41d4-9c80-f62c829aabd7`,
  oauthHost: 'https://hydra.tinajs.dev:4444',
  identityHost: '/api/proxy',
  redirectURI: 'http://localhost:3000/'
});

export default client