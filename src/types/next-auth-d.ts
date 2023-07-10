// eslint-disable-next-line unused-imports/no-unused-imports
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      loginUser: {
        token: string;
        tokenRefresh: string;
      };
      messageLoginUser?: string;
    };
  }
}
