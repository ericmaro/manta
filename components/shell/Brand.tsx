import React from 'react';
import { Box, Title } from '@mantine/core';
import { ThemeToggle } from './theme-toggle';
import { Logo } from './logo';


export function Brand() {

  return (
    <Box
      h={60}
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,
      })}
    >
      <Logo />
      <ThemeToggle />
    </Box>
  );
}