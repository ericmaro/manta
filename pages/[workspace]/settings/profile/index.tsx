
import Head from 'next/head'
import Shell from '@/components/shell'
import { Text } from '@mantine/core'
import ShellTopBarLeft from '@/components/shell/shell-top-bar-left'
import SettingsShell from '@/components/ui/settings/settings-shell'

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
          <Text>Profile</Text>
        </SettingsShell>


      </Shell>
    </>
  )
}
