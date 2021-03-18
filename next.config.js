const withImages = require("next-images");

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
};

module.exports = withImages({
  webpack: (config) => {
    config.module.rules.push({
      test: /react-spring/,
      sideEffects: true,
    });
    return config;
  },
});
