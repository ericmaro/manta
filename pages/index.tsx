import Head from 'next/head'
import Shell from '../components/shell'
import { Text } from '@mantine/core'
import ShellTopBarLeft from '@/components/shell/shell-top-bar-left'

export default function Home() {
  return (
    <>
      <Head>
        <title>Manta Dash</title>
        <meta name="description" content="Manta Next Generation Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Shell p='md'>
        <ShellTopBarLeft title='Overview'>

        </ShellTopBarLeft>
        <Text>Page Content Here</Text>

      </Shell>
    </>
  )
}
