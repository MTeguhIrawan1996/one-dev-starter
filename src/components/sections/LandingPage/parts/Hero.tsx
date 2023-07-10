import { ApolloError, useQuery } from '@apollo/client';
import { Box, Button, Flex } from '@mantine/core';
import Cookies from 'js-cookie';
import { signOut, useSession } from 'next-auth/react';

import { InnerWrapper } from '@/components/elements';

import {
  GET_USER,
  IGetUserResponse,
} from '@/graphql/query/user/useReadOneUser';

const Hero = () => {
  const { data: session, update } = useSession();
  const { data } = useQuery<IGetUserResponse>(GET_USER, {
    onError: (err: ApolloError) => {
      return err;
    },
    // eslint-disable-next-line unused-imports/no-unused-vars
    onCompleted: (data: IGetUserResponse) => {
      // console.log(data);
      // console.log(data);
    },
    fetchPolicy: 'cache-and-network',
  });

  async function updateSession() {
    if (session)
      update({
        ...session,
        user: {
          ...session.user,
          loginUser: {
            ...session.user.loginUser,
            token: 'toke',
          },
        },
      });
  }

  // console.log(session);

  return (
    <InnerWrapper>
      <Flex align="center">
        <Box>nama {data?.user.fullname}</Box>
        <Button
          onClick={() => {
            Cookies.remove('accesToken');
            Cookies.remove('refreshToken');
            signOut({ redirect: true, callbackUrl: '/auth' });
          }}
        >
          keluar
        </Button>
        <Button
          onClick={() => {
            updateSession();
          }}
        >
          Trigger Session
        </Button>
      </Flex>
    </InnerWrapper>
  );
};

export default Hero;
