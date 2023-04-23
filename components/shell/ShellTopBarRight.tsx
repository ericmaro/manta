
import { Box, Portal } from "@mantine/core";
type Props = {
    children: React.ReactNode;
}
function ShellTopBarRight(props: Props) {
    const { children } = props;
    return (
        <Portal target="#top-bar-right" >
            <Box sx={(_) => ({ display: "flex", alignItems: "center" })}>
                {children}
            </Box>
        </Portal>
    );
}

export default ShellTopBarRight;
