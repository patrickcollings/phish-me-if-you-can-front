import { ApolloClient, InMemoryCache } from "@apollo/client";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

console.log(publicRuntimeConfig.API_URL);

console.log(publicRuntimeConfig.API_URL);

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
});

export default client;
