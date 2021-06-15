const fs = require("fs");
const path = require("path");

const packagesToPatch = ["animated", "core", "konva", "native", "shared", "three", "web", "zdog"];

packagesToPatch.forEach(patchPackage);

function patchPackage(package) {
  const packageJsonPath = path.join("node_modules", "@react-spring", package, "package.json");
  const packageJson = fs.readFileSync(packageJsonPath, "utf-8");
  const modifiedPackageJson = packageJson.replace('"sideEffects": false,', "");
  fs.writeFileSync(packageJsonPath, modifiedPackageJson, {
    encoding: "utf-8",
  });
}

module.exports = {
  async redirects() {
    return [
      {
        source: "/password",
        destination: "/password/request-change",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/events/from-measurement",
        permanent: true,
      },
    ];
  },
  target: "serverless",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
};
