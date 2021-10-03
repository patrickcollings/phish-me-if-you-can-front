const env = process.env.ENV || "development";

const configs = {
  development: {
    API_URL: "http://localhost:8080/graphql",
  },
  production: {
    API_URL: "http://phishme-env.eba-k6jppnz9.eu-west-2.elasticbeanstalk.com",
  },
}[env];

module.exports = {
  env: {
    API_URL: configs.API_URL,
  },
};
