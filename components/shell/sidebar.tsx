import { Box, Flex, Navbar } from "@mantine/core";
import { SidebarNav } from "./sidebar-nav";
import { Brand } from "./brand";
import { User } from "./user";


function Sidebar() {

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
                                        href: "/",
                                        items: [
                                      
                                        ]
                                    },
                                    {
                                        title: "Documents",
                                        icon: "fileText",
                                        href: "/documents",
                                        items: []
                                    },
                                    {
                                        title: "Events",
                                        icon: "calendarClock",
                                        href: "/events",
                                        items: []
                                    },
                                    {
                                        title: "Settings",
                                        icon: "settings",
                                        href: "/settings",
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
                                        href: "/documents/upcoming",
                                        items: []
                                    },
                                    {
                                        title: "Expired",
                                        icon: "calendarX",
                                        href: "/documents/expired",
                                        items: []
                                    },
                                    {
                                        title: "Active",
                                        icon: "calendarCheck",
                                        href: "/documents/active",
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
                <User />
            </Navbar.Section>


        </Flex>
    );
}

export default Sidebar;