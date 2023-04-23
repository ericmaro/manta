import React from 'react';
import { Box, Title } from '@mantine/core';
import { ThemeToggle } from './ThemeToggle';


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
      <Title ml="sm" size={20} sx={(theme) => ({ textTransform: "uppercase" })} order={2}>Manta</Title>
      <ThemeToggle />
    </Box>
  );
}