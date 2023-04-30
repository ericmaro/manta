import { Title, Stack, Text } from "@mantine/core";
import InviteCoworkers from "./invice-coworkers";
interface Props {
    onClick: () => void;
}
export default function WorkSpace(props: Props) {
    const { onClick } = props;
    return (
        <>
            <Stack w="480px" >
                <Title align="center" weight={500} order={4} mb={15}>Invite co-workers</Title>
                <Text  align="center">Manta is meant to be used with your team. Invite some co-workers to test it out with.</Text>
                <InviteCoworkers onClick={onClick} />
            </Stack>

        </>
    )
}