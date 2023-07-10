import {
  ApolloClient,
  FetchResult,
  from,
  GraphQLRequest,
  HttpLink,
  InMemoryCache,
  Observable,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { notifications } from '@mantine/notifications';
import Cookies from 'js-cookie';
import { getSession, signOut } from 'next-auth/react';

import { IRefreshToken, REFRESH_TOKEN } from './query/auth/useRefreshToken';

function isRefreshRequest(operation: GraphQLRequest) {
  return operation.operationName === 'RefreshToken';
}

async function returnTokenDependingOnOperation(operation: GraphQLRequest) {
  const session = await getSession();
  const accessToken = Cookies.get('accesToken');
  const refreshToken = Cookies.get('refreshToken');

  if (isRefreshRequest(operation)) {
    return refreshToken
      ? refreshToken
      : session?.user.loginUser.tokenRefresh || '';
  }
  return accessToken ? accessToken : session?.user.loginUser.token || '';
}

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`,
});

const authLink = setContext(async (operation, { headers }) => {
  const token = await returnTokenDependingOnOperation(operation);

  const authorization = token ? `Bearer ${token}` : null;

  // Cek apakah kode sedang dijalankan di server atau di client
  const isServer = typeof window === 'undefined';

  // Jika kode sedang dijalankan di server, tidak perlu menyertakan header Authorization
  if (isServer) {
    return { headers };
  }
  return {
    headers: {
      ...headers,
      authorization: authorization,
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    const blackList = [
      'LoginAdmin',
      'LoginUser',
      'RegisterUser',
      'ForgotPassword',
      'ChangePassword',
    ];
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        switch (err.extensions.code) {
          case 'UNAUTHENTICATED':
            if (operation.operationName === 'RefreshToken') {
              notifications.show({
                color: 'red',
                title: 'Gagal',
                message: err.message,
              });
              Cookies.remove('accesToken');
              Cookies.remove('refreshToken');
              signOut({ redirect: true, callbackUrl: '/auth' });
            }
            if (blackList.includes(operation.operationName)) {
              return;
            }

            // eslint-disable-next-line no-case-declarations
            const observable = new Observable<FetchResult<Record<string, any>>>(
              (observer) => {
                (async () => {
                  try {
                    const accessToken = await RefreshToken();

                    const oldHeaders = operation.getContext().headers;
                    operation.setContext({
                      headers: {
                        ...oldHeaders,
                        authorization: accessToken
                          ? `Bearer ${accessToken}`
                          : '',
                      },
                    });
                    // Retry the failed request
                    const subscriber = {
                      next: observer.next.bind(observer),
                      error: observer.error.bind(observer),
                      complete: observer.complete.bind(observer),
                    };

                    forward(operation).subscribe(subscriber);
                  } catch (err) {
                    observer.error(err);
                  }
                })();
              }
            );
            return observable;
          case 'BAD_REQUEST':
            return;
        }
      }
    }

    if (networkError) {
      if (blackList.includes(operation.operationName)) {
        return;
      }
      notifications.show({
        color: 'red',
        title: 'Terjadi kesalahan server',
        message: 'Mohon coba lagi',
      });
    }
  }
);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, errorLink, httpLink]),
});

const RefreshToken = async () => {
  // const session = await getSession();

  // eslint-disable-next-line no-useless-catch
  try {
    const refreshResolverResponse = await client.query<IRefreshToken>({
      query: REFRESH_TOKEN,
    });
    const accessToken = refreshResolverResponse.data.refreshToken.token;
    const refreshToken = refreshResolverResponse.data.refreshToken.tokenRefresh;
    Cookies.set('accesToken', accessToken);
    Cookies.set('refreshToken', refreshToken);

    return accessToken;
  } catch (err: any) {
    throw err;
  }
};
