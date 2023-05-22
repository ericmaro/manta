import { Box, Flex, Navbar } from "@mantine/core";
import { SidebarNav } from "./sidebar-nav";
import { Brand } from "./brand";
import { User } from "./user";
// @ts-ignore
import { usePathname } from "next/navigation"


function Sidebar() {
    const pathname = usePathname()
    const workspace = pathname?.split("/")[1]

    return (
        <Flex sx={(theme) => ({
            width: 240,
            height: '100vh',
            borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
        })}
            direction={"column"} >
            {/* header */}
            <Navbar.Section>
                <Brand />
            </Navbar.Section>
            {/* navigation */}
            <Box sx={{ flexGrow: 1, overflowY: 'scroll' }} py="md">
                <SidebarNav
                    items={
                        [
                            {
                                title: "Discovery",
                                items: [
                                    {
                                        title: "Overview",
                                        icon: "layoutDashboard",
                                        href: `/${workspace}`,
                                        items: [

                                        ]
                                    },
                                    {
                                        title: "Documents",
                                        icon: "fileText",
                                        href: `/${workspace}/documents`,
                                        items: []
                                    },
                                    {
                                        title: "Events",
                                        icon: "calendarClock",
                                        href: `/${workspace}/events`,
                                        items: []
                                    },
                                    {
                                        title: "Settings",
                                        icon: "settings",
                                        href: `/${workspace}/settings`,
                                        items: []
                                    }
                                ]
                            },
                            {
                                title: "Timed Documents",
                                items: [
                                    {
                                        title: "Upcoming",
                                        icon: "calendarClock",
                                        href: `/${workspace}/documents/upcoming`,
                                        items: []
                                    },
                                    {
                                        title: "Expired",
                                        icon: "calendarX",
                                        href: `/${workspace}/documents/expired`,
                                        items: []
                                    },
                                    {
                                        title: "Active",
                                        icon: "calendarCheck",
                                        href: `/${workspace}/documents/active`,
                                        items: []
                                    }
                                ]
                            }
                        ]
                    }
                />
            </Box>

            {/* footer */}
            <Navbar.Section>
                <User/>
            </Navbar.Section>


        </Flex>
    );
}

export default Sidebar;

//