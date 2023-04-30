import { AppButton } from "@/components/ui/app-button";
import Invite from "@/components/ui/onboard/invite";
import Start from "@/components/ui/onboard/start";
import WorkSpace from "@/components/ui/onboard/workspace";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Title, Center, Stack, Text } from "@mantine/core";
import Head from "next/head";
import { useState } from "react";

export default function Signup() {
    const [step, setStep] = useState(0)
    const [parent, enableAnimations] = useAutoAnimate()


    return (
        <>
            <Head>
                <title>Welcome</title>
                <meta name="description" content="Welcome" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Center h='100vh' mx="auto">
                <Stack ref={parent}   >

                    {
                        step === 0 && (
                            <WorkSpace onClick={()=>setStep(1)} />
                        )
                    }

                    {
                        step === 1 && (
                            <Invite onClick={()=>setStep(2)} />
                        )
                    }

                    {
                        step === 2 && (
                            <Start onClick={()=>setStep(0)} />
                        )
                    }

                 
                </Stack>


            </Center>


        </>
    )
}