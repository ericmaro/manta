import Head from 'next/head'
import Shell from '@/components/shell'
import { Badge, Text } from '@mantine/core'
import ShellTopBarLeft from '@/components/shell/shell-top-bar-left'
import { NextPageContext } from 'next'

type Props = {
  tag: string;
}
 const DocumentTag = (props:Props) => {
  const {tag} = props
  return (
    <>
      <Head>
        <title>Documents</title>
        <meta name="description" content="Manta Next Generation Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Shell p='md'>
        <ShellTopBarLeft title='Documents'>
        <Badge ml="xs">{tag}</Badge>
        </ShellTopBarLeft>
        <Text>Page Content Here</Text>

      </Shell>
    </>
  )
}

DocumentTag.getInitialProps = async (context: NextPageContext) => {
  const {query} = context
  const {tag} = query
  return {tag}
}

export default DocumentTag;