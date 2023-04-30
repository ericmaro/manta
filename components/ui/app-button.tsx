import React from 'react';
import { Box, Button, ButtonProps, Title } from '@mantine/core';


interface Props extends ButtonProps {
   children: React.ReactNode;
   onClick?: () => void;
}


export function AppButton(props: Props) {
    const { children, ...rest } = props;

    return (
        <Button
            {...rest}
        >
            {children}
        </Button>
    );
}