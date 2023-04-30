
import { Text, Box, Portal } from "@mantine/core";
type Props = {
    children?: React.ReactNode;
    title: string;
}
function ShellTopBarLeft(props: Props) {
    const { children, title } = props;
    return (
        <Portal target="#top-bar-left" >
            <Box sx={(theme)=>({display:"flex", alignItems: "center" })}>
            <Text sx={(theme)=>({lineHeight:1 })}>{title}</Text>
            {children}
            </Box>
        </Portal>
    );
}

export default ShellTopBarLeft;
