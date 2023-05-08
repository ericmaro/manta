import { Box } from "@mantine/core";
import SettingsMenu from "./settings-menu";



type Props = {
    children: React.ReactNode;
}
function SettingsShell(props: Props) {
    const { children } = props;

    return (
        <Box sx={(theme)=>({display:'flex', height:'100%'})}>
            <SettingsMenu />
            <Box sx={(theme)=>({display:'flex', flex:"1", flexDirection:"column", height:'100%'})}  p="md">
                {children}
            </Box>
        </Box>
    );
}

export default SettingsShell;