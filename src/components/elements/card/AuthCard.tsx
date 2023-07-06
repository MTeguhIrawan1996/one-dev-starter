import { Box, Button, Flex, Paper, Stack, Title } from '@mantine/core';
import { useRouter } from 'next/router';
import * as React from 'react';

interface IAuthCardProps {
  children: React.ReactNode;
  titleCard?: string;
  enableBack?: boolean;
}

const AuthCard: React.FC<IAuthCardProps> = ({
  titleCard,
  children,
  enableBack,
}) => {
  const router = useRouter();
  return (
    <Paper shadow="sm" radius="lg" p="24px" w="470px">
      <Stack spacing="xl" align="flex-start" w="100%">
        <Box w="100%">
          <Title order={1} size="h4" align="center">
            {titleCard ?? 'Masuk'}
          </Title>
        </Box>
        {children}
        {enableBack ? (
          <Flex align="center" w="100%">
            <Button variant="subtle" size="xs" onClick={() => router.back()}>
              Kembali
            </Button>
          </Flex>
        ) : null}
      </Stack>
    </Paper>
  );
};

export default AuthCard;
