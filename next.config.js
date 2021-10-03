module.exports = {
  target: 'serverless',
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
};
