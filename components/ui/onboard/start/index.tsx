import { Title, Stack, Text } from "@mantine/core";
import { AppButton } from "../../app-button";
interface Props {
    onClick: () => void;
}
export default function Start(props: Props) {
    const { onClick } = props;
    return (
        <>
            <Stack w="480px" >
                <Title align="center" weight={500} order={4} mb={15}>You're good to go!</Title>
                <Text  align="center">Lets start streamline your business process and make your life a lot easier.</Text>
                <AppButton h={50} variant="gradient" gradient={{ from: '#80808030', to: '#80808005', deg: 35 }} styles={(theme) => ({
                    root: {
                        boxShadow: 'inset 0 0 0.5px 1px #80808030, 0 0.3px 0.4px #80808040',

                    }
                })} onClick={onClick}>Start</AppButton>
            </Stack>

        </>
    )
}