import { AppButton } from "@/components/ui/app-button";
import SignupWithEmail from "@/components/ui/auth/signup-with-email";
import SignupWithGoogle from "@/components/ui/auth/signup-with-google";
import { Title, Center, Stack, Text} from "@mantine/core";
import Head from "next/head";

export default function Signup() {
    return (
        <>
            <Head>
                <title>Signup</title>
                <meta name="description" content="Signup" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Center h='100vh' mx="auto">
                <Stack w="320px" >
                    <Title align="center" weight={500} order={4} mb={30}>Create your Manta account</Title>
                    <SignupWithGoogle />
                    <SignupWithEmail />
                    <Text size="xs"align="center">By creating an account, you consent to our Terms of Service and Data Processing Agreement</Text>
                </Stack>

            </Center>


        </>
    )
}