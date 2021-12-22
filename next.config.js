const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
};