import { createReactClient } from "@gqless/react";
import { mockServer, MockList } from "@graphql-tools/mock";

import { createClient, QueryFetcher } from "gqless";
import {
  generatedSchema,
  scalarsEnumsHash,
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from "./schema.generated";

//@ts-ignore
import schema from "../graphql/schema.graphql";

const mocks = {
  RootQuery: () => ({
    suggestions: () => new MockList([3, 10]),
  }),
};

const queryFetcher: QueryFetcher = async function (query, variables) {
  //@ts-ignore
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockServer(schema, mocks).query(query, variables));
    }, 1000);
  });
  // Modify "./src/graphql/schema.graphql" if needed
  /*const response = await fetch("./src/graphql/schema.graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: "cors",
  });

  const json = await response.json();

  return json;*/
};

export const client = createClient<GeneratedSchema, SchemaObjectTypesNames, SchemaObjectTypes>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
});

export const { query, mutation, mutate, subscription, resolved, refetch } = client;

export const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
  },
});

export * from "./schema.generated";
