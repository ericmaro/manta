
import Head from 'next/head'
import Shell from '@/components/shell'
import { ActionIcon, Avatar, Box, Button, Divider, Flex, ScrollArea, Stack, Text, TextInput } from '@mantine/core'
import ShellTopBarLeft from '@/components/shell/shell-top-bar-left'
import SettingsShell from '@/components/ui/settings/settings-shell'
import { Search } from 'lucide-react'
import { DetailedList } from '@/components/ui/detailed-list'
import { Icons } from '@/components/icons'
import { getUsers } from '@/services/userServices'
import { User as UserType } from "types/user"
import { useQuery } from '@tanstack/react-query'

export default function Members() {
  const MoreIcon = Icons['moreHorizontal'];
  const { data: users, isLoading } = useQuery<UserType[]>({
    queryKey: [
      'users',
    ],
    queryFn: getUsers,
  },);
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
            <Button
            color='brand'
            >
              Invite Members
            </Button>
          </Flex>
          <Box sx={{flex:1, height:'100%'}}  my={7} pb={18}>
            <ScrollArea.Autosize
            h={'100%'}
            >

                {users?.map((user) => (
              <Box key={user.id}>
                <DetailedList

                  title={`${user.firstName} ${user.lastName}`}
                  description={user.email}
                  middle={<Text size="sm">{user.domain}</Text>}
                  leading={<Avatar
                    src={user.image}
                    radius="xl"
                  />}
                  trailing={<ActionIcon>
                    <MoreIcon size={20} />
                  </ActionIcon>}
                />
                <Divider />
              </Box>
            ))}
            </ScrollArea.Autosize>
          

          </Box>
        </SettingsShell>
      </Shell>
    </>
  )
}
