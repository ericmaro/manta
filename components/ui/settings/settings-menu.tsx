import { SidebarNav } from "@/components/shell/sidebar-nav";
import { Box, Flex } from "@mantine/core";
// @ts-ignore
import { usePathname } from "next/navigation"



function SettingsMenu() {
    const pathname = usePathname()
    const workspace = pathname?.split("/")[1]
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
                                        icon: "settings2",
                                        href: `/${workspace}/settings`,
                                        items: [

                                        ]
                                    },
                                    {
                                        title: "General",
                                        icon: "wrench",
                                        href:`/${workspace}/settings/general`,
                                        items: []
                                    },
                                    {
                                        title: "Security",
                                        icon: "shieldCheck",
                                        href: `/${workspace}/settings/security`,
                                        items: []
                                    },
                                    {
                                        title: "Members",
                                        icon: "users",
                                        href: `/${workspace}/settings/members`,
                                        items: []
                                    },
                                    {
                                        title: "Profile",
                                        icon: "userCog",
                                        href: `/${workspace}/settings/profile`,
                                        items: []
                                    }
                                ]
                            },
                            {
                                title: "Help",
                                items: [
                                    {
                                        title: "Documentation",
                                        icon: "book",
                                        href: `/${workspace}/settings/documentation`,
                                        items: []
                                    },
                                    {
                                        title: "Tutorials",
                                        icon: "graduationCap",
                                        href: `/${workspace}/settings/tutorials`,
                                        items: []
                                    },
                                    {
                                        title: "Community",
                                        icon: "messageSquare",
                                        href: `/${workspace}/settings/community`,
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