import { createReactClient } from "@gqless/react";
import { mockServer, MockList } from "@graphql-tools/mock";

import { createClient, QueryFetcher } from "gqless";
import ThingsboardService from "../services/ThingsboardService";

import {
  generatedSchema,
  scalarsEnumsHash,
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from "./schema.generated";

/*const mocks = {
  RootQuery: () => ({
    devices: () => new MockList([5, 5]),
    eventsFromMeasure: () => new MockList([0, 20]),
    eventsFromEmployee: () => new MockList([0, 20]),
    suggestions: () => new MockList([0, 20]),
    feedback: () => new MockList([0, 20]),
    manageUsers: () => new MockList([1, 10]),
    manageDevices: () => new MockList([5, 5]),
    eventsNotifications: () => new MockList([3, 3]),
    feedbackNotifications: () => new MockList([3, 3]),
  }),
};

const mockQueryFetcher: QueryFetcher = async function (query, variables) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockServer(schema, mocks).query(query, variables));
    }, 500);
  });
};*/

const serverQueryFetcher: QueryFetcher = async function (query, variables) {
  const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...ThingsboardService.getInstance().getAuthHeader(),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    mode: "cors",
  });

  const json = await response.json();
  return json;
};

const queryFetcher: QueryFetcher = function (query, variables) {
  return serverQueryFetcher(query, variables);
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
