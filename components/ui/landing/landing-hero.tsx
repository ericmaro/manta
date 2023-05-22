import { AspectRatio, Center, Stack, Title, Text, Container, Box } from "@mantine/core";
import { AppButton } from "../app-button";

export function LandingHero() {
  return (
    <Container size="xl">
      <AspectRatio ratio={16 / 9}>
        <Center>
          <Stack spacing="xs" align="center" justify="center" >
            <Title size={64} align="center" sx={(theme) => ({
              color: theme.colorScheme === 'dark' ? "#ffffff" : "#000000",
            })}>
              Mantine Saas Starter
            </Title>
            <Container>

              <Text align="center" size="lg">
                Startup is a free Next.js template for startups and SaaS businesses. It comes with all the essential pages, components, and sections you need to launch a complete business website. It is built with Next 13.x and Mantine.
              </Text>
            </Container>
            <AppButton
              h={60} w={200} mt={30} variant="gradient" gradient={{ from: '#80808030', to: '#80808005', deg: 35 }} styles={(theme) => ({
                root: {
                  boxShadow: 'inset 0 0 0.5px 1px #80808030, 0 0.3px 0.4px #80808040',

                }
              })}
            >Get it on Github</AppButton>

          </Stack>
        </Center>
      </AspectRatio>
    </Container>
  )
}