const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  trailingSlash: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    GAME_URL: process.env.GAME_URL,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
};