import { SidebarNav } from "@/components/shell/sidebar-nav";
import { Box, Flex } from "@mantine/core";



function SettingsMenu() {

    return (
        <Flex sx={(theme) => ({
            width: 240,
            height: 'calc(100vh - 60px)',
            borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                }`,
        })}
            direction={"column"} >

            {/* navigation */}
            <Box sx={{ flexGrow: 1, overflowY: 'scroll' }} py="md">
                <SidebarNav
                    items={
                        [
                            {
                                title: "System",
                                items: [
                                    {
                                        title: "Overview",
                                        icon: "playCircle",
                                        href: "/settings",
                                        items: [

                                        ]
                                    },
                                    {
                                        title: "General",
                                        icon: "fileText",
                                        href: "/settings/general",
                                        items: []
                                    },
                                    {
                                        title: "Security",
                                        icon: "calendarClock",
                                        href: "/settings/security",
                                        items: []
                                    },
                                    {
                                        title: "Profile",
                                        icon: "settings",
                                        href: "/settings/profile",
                                        items: []
                                    }
                                ]
                            },
                            {
                                title: "Help",
                                items: [
                                    {
                                        title: "Documentation",
                                        icon: "calendarClock",
                                        href: "/documents/upcoming",
                                        items: []
                                    },
                                    {
                                        title: "Tutorials",
                                        icon: "calendarCheck",
                                        href: "/documents/expired",
                                        items: []
                                    },
                                    {
                                        title: "Community",
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




        </Flex>
    );
}

export default SettingsMenu;