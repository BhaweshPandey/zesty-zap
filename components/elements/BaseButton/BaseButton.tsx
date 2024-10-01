import React, { ReactNode } from 'react';
import { Button, useMantineTheme } from '@mantine/core';

export const BaseButton = (props: {
  variant: string
  variantColors?: string
  outline?: boolean
  children?: ReactNode;
  [x: string | number | symbol]: unknown;
}) => {
  const theme = useMantineTheme();

  const variantBgColors= {
    primary: theme.colors.blue[0],
    secondary: theme.colors.blue[1],
    bgGreen: theme.colors.green[0],
    bgGray: theme.colors.gray[0],
    bgWhite: theme.colors.white[0],
    bgYellow: theme.colors.yellow[0],
    bgGraySecond: theme.colors.gray[2],
  };

  const variantColors = {
    primary: theme.colors.blue[0],
    secondary: theme.colors.blue[1],
    bgGreen: theme.colors.green[0],
    bgGray: theme.colors.gray[0],
    white: theme.colors.white[0],
    bgGraySecond: theme.colors.gray[2],
  }

  let variant = props.variant ? props.variant : variantBgColors.primary;

  return (
    <Button
      {...props}
      bg={variantBgColors[variant as keyof typeof variantBgColors]}
      c={'variantColors[variant as keyof typeof variantColors]'}
      variant={props.outline ? 'default' : ''}
      p={'0px'}
    >
      {props.children}
    </Button>
  );
};
