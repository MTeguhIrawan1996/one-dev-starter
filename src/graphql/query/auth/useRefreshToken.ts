import { gql } from '@apollo/client';

export const REFRESH_TOKEN = gql`
  query RefreshToken {
    refreshToken {
      token
      tokenRefresh
    }
  }
`;

export interface IRefreshToken {
  refreshToken: {
    token: string;
    tokenRefresh: string;
  };
}
