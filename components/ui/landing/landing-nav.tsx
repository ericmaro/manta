import { Icons } from "@/components/icons";
import { Brand } from "@/components/shell/brand";
import { Logo } from "@/components/shell/logo";
import { ActionIcon, Button, Container, Flex, NavLink, Navbar, UnstyledButton } from "@mantine/core";
import Link from "next/link";


export default function LandingNav() {
    const Github = Icons['gitHub'];
    return (
        <Container size="xl">
            <Flex justify="space-between" align="center"
                direction="row"
                sx={(theme) => ({
                    padding: theme.spacing.xs,

                })}
            >
                <Logo />

                <Flex gap={15} align="center"
                    direction="row">

                    <NavLink component={Link} label="Login" href="/auth/login" />
                    <ActionIcon>
                        <Github />
                    </ActionIcon>
                </Flex>


            </Flex>
        </Container>);
}