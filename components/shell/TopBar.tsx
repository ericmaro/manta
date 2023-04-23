import { Group, Text, Avatar, Space, Box, Flex, Portal } from '@mantine/core';

function Topbar() {
  return (
    <Flex
      h={60}
      direction="row"
      sx={(theme) => ({
        padding: theme.spacing.md,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,

      })}
    >
      <div id="top-bar-left" style={{ display: 'flex', alignItems: 'center' }} />
      <Space sx={{
        flexGrow: 1,
      }} />
      <div id="top-bar-right" style={{ display: 'flex', alignItems: 'center' }} />
    </Flex>
  );
}



export default Topbar;