import Head from 'next/head'
import Shell from '@/components/shell/shell'
import { Text } from '@mantine/core'
import ShellTopBarLeft from '@/components/shell/ShellTopBarLeft'

export default function Events() {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Manta Next Generation Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Shell>
        <ShellTopBarLeft title='Events'>

        </ShellTopBarLeft>
        <Text>Page Content Here</Text>

      </Shell>
    </>
  )
}
