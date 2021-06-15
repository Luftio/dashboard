/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "./src/graphql/schema.graphql",
    headers: {},
  },
  destination: "./src/gqless/index.ts",
  subscriptions: false,
};

module.exports = config;
