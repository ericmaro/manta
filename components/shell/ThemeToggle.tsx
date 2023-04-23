import React, { useEffect } from 'react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useLocalStorage } from 'usehooks-ts';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export function ThemeToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true)
    const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme)
        toggleColorScheme()
    }

    useEffect(() => {
        if (isDarkTheme) {
            toggleColorScheme('dark')
        } else {
            toggleColorScheme('light')
        }
    }, [isDarkTheme])



    return (
        <ActionIcon ref={parent} variant="default" onClick={() => toggleTheme()} size={30}>
            {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
        </ActionIcon>
    );
}