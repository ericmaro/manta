
import Head from 'next/head'
import Shell from '@/components/shell'
import { Text } from '@mantine/core'
import ShellTopBarLeft from '@/components/shell/shell-top-bar-left'
import SettingsShell from '@/components/ui/settings/settings-shell'

export default function Members() {
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
          <Text>Members</Text>
        </SettingsShell>
      </Shell>
    </>
  )
}
