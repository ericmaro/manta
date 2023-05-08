
import Head from 'next/head'
import Shell from '@/components/shell'
import { Avatar, Box, Button, Input, Text, TextInput } from '@mantine/core'
import ShellTopBarLeft from '@/components/shell/shell-top-bar-left'
import SettingsShell from '@/components/ui/settings/settings-shell'
import { fakeUser } from '@/mock/users'

export default function Profile() {
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
              <Avatar size="200px" radius="200px" src={fakeUser.avatar} />
            </Box>

            <Box mb="md">
              <Text size="sm">Email</Text>
              <Text size="sm" color='dimmed'>{fakeUser.email}</Text>
            </Box>

            <Box mb="md" w={360}>
              <TextInput label="Full Name" placeholder="Name" defaultValue={fakeUser.name} />
            </Box>

            <Button  color="brand">Save</Button>
          </Box>


        </SettingsShell>


      </Shell>
    </>
  )
}
