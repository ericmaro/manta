import { Title, Stack, Text } from "@mantine/core";
import CreateWorkspace from "./create-workspace";
interface Props {
    onClick: () => void;
}
export default function WorkSpace(props: Props) {
    const { onClick } = props;
    return (
        <>
            <Stack w="480px" >
                <Title align="center" weight={500} order={4} mb={15}>Create a new workspace</Title>
                <Text  align="center">Workspaces are shared environments where teams can work on projects, cycles and tasks.</Text>
                <CreateWorkspace onClick={onClick} />
            </Stack>

        </>
    )
}