import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

import ThingsboardService from "../services/ThingsboardService";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (networkError) {
    console.log(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);
    console.log(networkError);
  }
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      console.log(err);
      if (err?.extensions?.code === "invalid-jwt") {
        console.log("Invalid JWT");
        ThingsboardService.getInstance().logout();
        // TODO navigate to logout
      }
    }
  }
});

const authLink = setContext(async (_, { headers }) => {
  const authHeaders = await ThingsboardService.getInstance().getAuthHeader();
  return {
    headers: {
      ...headers,
      ...authHeaders,
    },
  };
});

export const client = new ApolloClient({
  link: from([
    errorLink,
    authLink,
    new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    }),
  ]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: "all",
      notifyOnNetworkStatusChange: true,
    },
    query: {
      errorPolicy: "all",
      notifyOnNetworkStatusChange: true,
    },
    mutate: {
      errorPolicy: "all",
    },
  },
});
