/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
require("dotenv").config();

const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: process.env.GRAPHQL_ENDPOINT,
    headers: {},
  },
  destination: "./src/gqless/index.ts",
  subscriptions: false,
};

module.exports = config;
