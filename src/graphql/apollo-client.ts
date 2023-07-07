import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { notifications } from '@mantine/notifications';

import { IExtensionGql } from '@/types/global';

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`,
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  const blackListBadRequest = ['RegisterUser'];
  const blackList = [''];
  const errorActions = {
    BAD_REQUEST: (errorMessage: string) => {
      if (blackListBadRequest.includes(operation.operationName)) {
        return;
      }
      notifications.show({
        color: 'red',
        title: 'Gagal',
        message: errorMessage,
      });
    },
    // Tambahkan kode kesalahan lain dan aksi yang sesuai di sini
  };

  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      const error = err as unknown as IExtensionGql;

      const errorCode = error.extensions.code;
      const errorMessage = error.extensions.originalError.message;

      const errorAction = errorActions[errorCode as any];
      if (errorAction) {
        errorAction(errorMessage);
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
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
});
