import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      user {
        id
        name
        email
        mobile
        status
        createdAt
        updatedAt
      }
    }
  }
`;