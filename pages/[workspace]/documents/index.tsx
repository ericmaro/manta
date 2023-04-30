import Head from 'next/head'
import Shell from '@/components/shell'
import { Button, Text } from '@mantine/core'
import ShellTopBarLeft from '@/components/shell/shell-top-bar-left'
import ShellTopBarRight from '@/components/shell/shell-top-bar-right'
import { FileText, Plus } from 'lucide-react'

export default function Documents() {
  return (
    <>
      <Head>
        <title>Documents</title>
        <meta name="description" content="Manta Next Generation Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Shell p='md'>
        <ShellTopBarLeft title='Documents'/>
        <ShellTopBarRight>
            <Button leftIcon={<FileText size={14} />}  color='brand' size='sm' onClick={() => {}}>New Document</Button>
        </ShellTopBarRight>
        <Text>Page Content Here</Text>

      </Shell>
    </>
  )
}
