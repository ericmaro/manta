import { Center, Loader } from "@mantine/core";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export interface PageLoadingIndicatorProps {
    topOffset?: string;
    children: React.ReactNode;
}

export default function PageLoadingIndicator(props: PageLoadingIndicatorProps) {
    const { topOffset, children } = props;
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url: string) => (url === router.asPath) && setLoading(false);
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    });
    return (<>
        {
            loading ?
                <Center style={{ height: `calc(100vh - ${topOffset ?? '0px'}`, }} >
                    <Loader />
                </Center> : children
        }
    </>
    )
}