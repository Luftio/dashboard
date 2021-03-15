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
