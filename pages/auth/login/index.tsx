import { AppButton } from "@/components/ui/app-button";
import LoginWithEmail from "@/components/ui/auth/login-with-email";
import LoginWithGoogle from "@/components/ui/auth/login-with-google";
import { Title, Center, Stack } from "@mantine/core";
import Head from "next/head";

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Center h='100vh' mx="auto">
                <Stack w="320px" >
                    <Title align="center" weight={500} order={4} mb={30}>Log in to Manta</Title>
                    <LoginWithGoogle />
                    <LoginWithEmail />
                </Stack>

            </Center>


        </>
    )
}