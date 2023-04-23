import { AppShell, Box } from "@mantine/core";

import PageLoadingIndicator from "./PageLoadingIndicator";
import Sidebar from "./sidebar";
import Topbar from "./TopBar";

type Props = {
    children: React.ReactNode;
}
function Shell(props: Props) {
    const { children } = props;

    return (
        <AppShell
            navbar={<Sidebar />}
            padding={0}
        >
            <Box>
                <Topbar />
                <Box p="md">
                <PageLoadingIndicator topOffset="100px">{children}</PageLoadingIndicator>
                </Box>
            </Box>
        </AppShell>
    );
}

export default Shell;