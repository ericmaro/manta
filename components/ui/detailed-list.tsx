import React from 'react';
import { Box, Text } from '@mantine/core';


interface Props {
    title: string;
    description?: string;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    middle?: React.ReactNode;
   onClick?: () => void;
}


export function DetailedList(props: Props) {
    const { title, description, leading, trailing, middle } = props;

    return (
        <Box
            sx={(theme) => ({
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: theme.spacing.xs,
                paddingBottom: theme.spacing.xs,
            })}
        >
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width:'40%' }}>
                {leading}
                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
                <Text size="sm" weight={500}>
                  {title}
                </Text>
                {description && (
                    <Text color="dimmed" size="xs">
                    {description}
                  </Text>
                )}
                
                </Box>
            </Box>
            {middle && (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {middle}
            </Box>
            )}
            {trailing && (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {trailing}
            </Box>
            )}
        </Box>
    );
}