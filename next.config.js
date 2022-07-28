const path = require('path')

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src www.phishmeifyoucan.com;
  style-src 'self' www.phishmeifyoucan.com;
  font-src 'self';  
`;

const securityHeaders =
  process.env.NODE_ENV !== "production"
    ? [
        // had to add one origin so that next could compile
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
      ]
    : [
        {
          key: "Content-Security-Policy",
          value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ];

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // trailingSlash: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    GAME_URL: process.env.GAME_URL,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};