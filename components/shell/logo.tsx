import { Title } from "@mantine/core";

export function Logo() {
    return (
        <Title ml="sm" size={20} sx={(theme) => ({ textTransform: "uppercase" })} order={2}>Manta</Title>
    );
}