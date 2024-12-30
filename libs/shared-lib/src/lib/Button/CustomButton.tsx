'use client';
import React from 'react';
import { Box, Button } from '@mui/material';
import { CustomTypography } from '../Typography/CustomTypography';

interface CustomButtonProps {
  label?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  supportingText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label = 'Continue',
  width = '328px',
  height = '40px',
  backgroundColor = '#6750A4',
  borderRadius = '50px',
  color = '#FFFFFF',
  fontSize = '16px',
  fontWeight = 'bold',
  supportingText = '',
  onClick,
  ...props
}) => {
  return (
    <Box
      sx={{
        borderTop: '1px solid #0000004D',
        paddingTop: 2,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button
        {...props}
        sx={{
          backgroundColor,
          borderRadius,
          width,
          height,
          textTransform: 'none',
          '&:hover': {
            backgroundColor,
          },
          color,
          fontSize,
          fontWeight,
        }}
        onClick={onClick}
      >
        {label}
      </Button>
      {supportingText && (
        <CustomTypography
          variant="h1"
          fontSize={'16px'}
          color="#3B383E"
          fontWeight={500}
        >
          {supportingText}
        </CustomTypography>
      )}
    </Box>
  );
};