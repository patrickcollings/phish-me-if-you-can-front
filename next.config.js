const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  target: "serverless",
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
};