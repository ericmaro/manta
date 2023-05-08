import React from 'react';
import { IconChevronRight, IconChevronLeft, IconSettings, IconTrash } from '@tabler/icons';
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme, Menu } from '@mantine/core';
import { fakeUser } from '@/mock/users';

export function User() {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{

        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,
      }}
    >
      <Menu width={220} >
        <Menu.Target>
          <UnstyledButton
            sx={{
              display: 'block',
              width: '100%',
              padding: theme.spacing.xs,
              borderRadius: theme.radius.sm,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

              '&:hover': {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
              },
            }}
          >
            <Group>
              <Avatar
                src={fakeUser?.avatar}
                radius="xl"
              />
              <Box sx={{ flex: 1 }}>
                <Text size="sm" weight={500}>
                  {fakeUser?.name}
                </Text>
                <Text color="dimmed" size="xs">
                  {fakeUser?.email}
                </Text>
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