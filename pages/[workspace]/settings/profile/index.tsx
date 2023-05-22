
import Head from 'next/head'
import Shell from '@/components/shell'
import { Avatar, Box, Button, Input, Skeleton, Text, TextInput } from '@mantine/core'
import ShellTopBarLeft from '@/components/shell/shell-top-bar-left'
import SettingsShell from '@/components/ui/settings/settings-shell'
import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/services/userServices'
import { User as UserType } from "types/user"

export default function Profile() {
  const { data: user, isLoading } = useQuery<UserType>({
    queryKey: [
      'user',
    ],
    queryFn: getUser,
  },);
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Manta Next Generation Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Shell>
        <ShellTopBarLeft title='Profile'>

        </ShellTopBarLeft>
        <SettingsShell>
          <Box>
            <Box mb="md">
              {isLoading && <Skeleton height={200} circle />}
              {!isLoading && <Avatar size="200px" radius="200px" src={user?.image} />}
            </Box>

            <Box mb="md">
              <Text size="sm">Email</Text>
              {isLoading && <Skeleton height={20} mt={6} width="180px" radius="xl" />}
              {!isLoading && <Text size="sm" color='dimmed'>{user?.email}</Text>}
            </Box>

            <Box mb="md" w={360}>
              <TextInput label="Full Name" placeholder="Name" defaultValue={`${user?.firstName} ${user?.firstName}`} />
            </Box>

            <Button color="brand">Save</Button>
          </Box>
        </SettingsShell>
      </Shell>
    </>
  )
}
