import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      tokenRefresh
    }
    messageLoginUser
  }
`;

export interface LoginUserResponse {
  loginUser: {
    token: string;
    tokenRefresh: string;
  };
  messageLoginUser?: string;
}

export interface LoginAdminData {
  loginAdmin: {
    token: string;
    tokenRefresh: string;
  };
  messageLoginAdmin?: string;
}

export interface LoginRequest {
  email: string | undefined;
  password: string | undefined;
}
