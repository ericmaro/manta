
import Head from 'next/head'
import Shell from '@/components/shell'
import { ActionIcon, Avatar, Box, Button, Divider, Flex, Stack, Text, TextInput, UnstyledButton } from '@mantine/core'
import ShellTopBarLeft from '@/components/shell/shell-top-bar-left'
import SettingsShell from '@/components/ui/settings/settings-shell'
import { Search } from 'lucide-react'
import { DetailedList } from '@/components/ui/detailed-list'
import { Icons } from '@/components/icons'
import { fakeUsers } from '@/mock/users'

export default function Members() {
  const MoreIcon = Icons['moreHorizontal'];
  return (
    <>
      <Head>
        <title>Members</title>
        <meta name="description" content="Manta Next Generation Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Shell>
        <ShellTopBarLeft title='Members'>

        </ShellTopBarLeft>
        <SettingsShell>
          <Flex w="100%" align="center" justify="space-between">
            <TextInput
              w={300}
              icon={<Search size={16} />}
              placeholder="Search by name or email"
              withAsterisk
            />
            <Button>
              Invite Members
            </Button>
          </Flex>
          <Stack mt={30}>
            {fakeUsers.map((user) => (
              <Box key={user.id}>
                <DetailedList

                  title={user.name}
                  description={user.email}
                  middle={<Text size="sm">{user.role}</Text>}
                  leading={<Avatar
                    src={user.avatar}
                    radius="xl"
                  />}
                  trailing={<ActionIcon>
                    <MoreIcon size={20} />
                  </ActionIcon>}
                />
                <Divider />
              </Box>
            ))}

          </Stack>
        </SettingsShell>
      </Shell>
    </>
  )
}
