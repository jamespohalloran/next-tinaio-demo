import { ForestryClient } from "@forestryio/client";

const client = new ForestryClient("", {
  gqlServer: `http://localhost:4001/graphql`,
});

export default client