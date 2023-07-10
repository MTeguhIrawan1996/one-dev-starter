import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { client } from '@/graphql/apollo-client';
import { LOGIN_USER } from '@/graphql/mutation/auth/useLoginUser';

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/auth',
  },
  providers: [
    // Email & Password
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        const { data } = await client.mutate({
          mutation: LOGIN_USER,
          variables: {
            email: credentials?.email,
            password: credentials?.password,
          },
        });

        if (data) {
          // Any object returned will be saved in `user` property of the JWT
          return data;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    // eslint-disable-next-line unused-imports/no-unused-vars
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update') {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
    // eslint-disable-next-line unused-imports/no-unused-vars
    async session({ session, token }) {
      session.user = token as any;
      return session; // The return type will match the one returned in `useSession()`
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
