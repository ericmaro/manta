import { AppShell, Box } from "@mantine/core";

import PageLoadingIndicator from "./page-loading-indicator";
import Sidebar from "./sidebar";
import Topbar from "./top-bar";

type Props = {
    children: React.ReactNode;
    p?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}
function Shell(props: Props) {
    const { children, p } = props;


    return (
        <AppShell
            navbar={<Sidebar  />}
            padding={0}
            sx={
                {
                    height: '100vh',
                    overflow: 'hidden',
                }
            }

            
        >
            <Box>
                <Topbar />
                <Box p={p}>
                <PageLoadingIndicator topOffset="100px">{children}</PageLoadingIndicator>
                </Box>
            </Box>
        </AppShell>
    );
}

export default Shell;