module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_ACCESS_TOKEN,
      sites: [
        {
          name: "Site 1",
          id: process.env.NETFILY_SITE_ID,
          buildHook: process.env.NETFILY_BUILD_HOOK,
          branch: "backend", // optional
        },
      ],
    },
  },
});
