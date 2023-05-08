
import Head from 'next/head'
import Shell from '@/components/shell'
import { Avatar, Box, Button, Divider, Text, TextInput } from '@mantine/core'
import ShellTopBarLeft from '@/components/shell/shell-top-bar-left'
import SettingsShell from '@/components/ui/settings/settings-shell'
import { fakeUser } from '@/mock/users'

export default function General() {
  return (
    <>
      <Head>
        <title>General</title>
        <meta name="description" content="Manta Next Generation Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Shell>
        <ShellTopBarLeft title='General'>

        </ShellTopBarLeft>
        <SettingsShell>
          <Box>

            <Box mb="md">
              <Text size="sm">Logo</Text>
              <Avatar mb="sm" src={fakeUser.avatar} />
              <Text size="sm" color='dimmed'>Pick a logo for your workspace. Size recommended is 150x150px</Text>
            </Box>

            <Box mb="md"  w={360}>
              <TextInput label="Workspace name" placeholder="Company name" />
            </Box>

            <Box mb="md" w={360}>
              <TextInput label="Workspace URL" placeholder="url" defaultValue={fakeUser.name} />
            </Box>

            <Button color="brand">Update</Button>
            <Divider my={30} />

            <Box mb="md">
              <Text size="sm">Delete Workspace</Text>
              <Text size="sm" mb="md" color='dimmed'>This action is irreversible. All data will be lost.</Text>
              <Button color="red">Delete</Button>
            </Box>
          </Box>
        </SettingsShell>


      </Shell>
    </>
  )
}
