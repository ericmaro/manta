
import React from 'react';
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme, Menu, Skeleton } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/services/userServices';
import { User as UserType } from "types/user"
export function User() {
  const { data: user, isLoading } = useQuery<UserType>({
    queryKey: [
      'user',
    ],
    queryFn: getUser,
  },);

  return (
    <Box
      sx={(theme) => ({

        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,
      })}
    >
      <Menu width={220} >
        <Menu.Target>
          <UnstyledButton
            sx={(theme) => ({
              display: 'block',
              width: '100%',
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
              '&:hover': {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              },
            })}
          >
            <Group>
              {isLoading ? <Skeleton height={40} circle /> : <Avatar
                src={user?.image}
                radius="xl"
              />}
              <Box sx={{ flex: 1 }}>
                {isLoading && <>
                  <Skeleton height={8} radius="xl" />
                  <Skeleton height={8} mt={6} width="70%" radius="xl" />
                </>}
                {!isLoading && <>
                  <Text size="sm" weight={500}>
                    {user?.firstName} {user?.lastName}
                  </Text>
                  <Text color="dimmed" size="xs">
                    {user?.email}
                  </Text></>}
              </Box>
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item >Settings</Menu.Item>
          <Menu.Item >View Profile</Menu.Item>
          <Menu.Divider />
          <Menu.Item >Documentation</Menu.Item>
          <Menu.Item >Community</Menu.Item>
          <Menu.Divider />
          <Menu.Item color="red" >Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
}
