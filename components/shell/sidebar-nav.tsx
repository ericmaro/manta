"use client"

// @ts-ignore
import { usePathname } from "next/navigation"
import { SidebarNavItem } from "types/nav"
import { Icons } from "@/components/icons"
import { Box, NavLink, Text, ThemeIcon } from "@mantine/core"




export interface SidebarNavProps {
  items: SidebarNavItem[]
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()


  return (
    <Box sx={{ width: "100%" }}>
      {items.map((item, index) => (
        <Box key={index} pb={"md"}>
          <Text px={"lg"}  fz="sm">
            {item.title}
          </Text>
          {item?.items?.length && (
            <SidebarNavItemsComponent items={item.items} pathname={pathname} />
          )}
        </Box>
      ))}
    </Box>
  )
}

interface SidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function SidebarNavIcon({ icon }: { icon: string }) {
  // @ts-ignore
  const Icon = Icons[icon]
  if(!Icon){
    console.log("Icon not found: ", icon)
    return null
  }
  return (
    <ThemeIcon size="sm" color="transparent" sx={(theme) => ({
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
      ":hover": { bg: theme.colors.brand[1], color: theme.colors.brand[5] },
    })}>
      <Icon />
    </ThemeIcon>

  )
}

export function SidebarNavItemsComponent({
  items,
  pathname,
}: SidebarNavItemsProps) {

  return items?.length ? (
    <>
      {items.map((item, index) =>
        (
          <Box  key={index} px="xs" py="5px">
            <NavLink
              key={index}
              component="a"
              label={item.title}
              icon={item.icon && <SidebarNavIcon icon={item.icon} />}
              href={item.href}
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                borderRadius: "10px",
                height: "100%",
                ":hover": { bg: theme.colors.brand[1], color: theme.colors.brand[6] },
              })}
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noreferrer" : ""}
            >

             {
              item.items?.length ? (
                <>
                  {item.items.map((subitem, j) => (
                     <NavLink
                     key={j}
                     component="a"
                     label={subitem.title}    
                     href={subitem.href}
                     target={subitem.external ? "_blank" : ""}
                     rel={subitem.external ? "noreferrer" : ""}
                   />
                    ))}
                </>
              ) : null
             }
            </NavLink>
          </Box>

        )
      )}
    </>
  ) : null
}