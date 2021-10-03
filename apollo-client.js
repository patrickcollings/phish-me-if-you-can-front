import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.API_URL);

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

export default client;
