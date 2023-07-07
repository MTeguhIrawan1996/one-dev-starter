import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!
    $password: String!
    $repassword: String!
    $fullname: String!
    $birthDay: String!
  ) {
    registerUser(
      input: {
        email: $email
        password: $password
        repassword: $repassword
        fullname: $fullname
        birthDay: $birthDay
      }
    ) {
      idUser
      email
    }
    messageRegisterUser
  }
`;

export interface RegisterUserData {
  email: string;
  password: string;
  repassword: string;
  fullname: string;
  birthDay: string;
  bio?: string;
  homepage?: string;
  image?: string;
}

export interface IRegisterUserResponse {
  registerUser: RegisterUserData;
  messageRegisterUser?: string;
}

export type IRegisterUserRequest = RegisterUserData;
