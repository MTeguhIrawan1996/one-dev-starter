import { gql } from '@apollo/client';

export const GET_USER = gql`
  query getUser {
    user {
      idUser
      email
      fullname
      bio
      homepage
      role
      pathImage
    }
    messageUser
  }
`;

export interface IGetUserResponse {
  user: IGetUserData;
  messageUser?: string;
}

export interface IGetUserData {
  idUser: string;
  email: string;
  fullname: string;
  birthDay: string;
  pathImage?: string;
  role?: string;
  bio?: string;
  homepage?: string;
}
