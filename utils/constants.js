import { gql } from "@apollo/client";

export const createUserQuery = gql`
  mutation CreateUserMutation(
    $email: String!
    $firstName: String!
    $lastName: String!
  ) {
    createUser(email: $email, firstName: $firstName, lastName: $lastName)
  }
`;

export const verifyUserQuery = gql`
  mutation VerifyUserMutation(
    $token: String!
  ) {
    verifyUser(token: $token)
  }
`;

export const unsubscribeUserQuery = gql`
  mutation UnsubscribeUser($email: String!) {
    unsubscribeUser(email: $email)
  }
`;


