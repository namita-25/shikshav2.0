import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
interface ActionIcon {
  icon: React.ReactNode;
  ariaLabel: string;
  onClick: () => void;
}
interface CommonAppBarProps {
  title?: string;
  showMenuIcon?: boolean;
  showBackIcon?: boolean;
  menuIconClick?: () => void;
  backIconClick?: () => void;
  actionButtonLabel?: string;
  actionButtonClick?: () => void;
  actionButtonColor?: 'inherit' | 'primary' | 'secondary' | 'default';
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  color?: 'primary' | 'secondary' | 'default' | 'transparent' | 'inherit';
  actionIcons?: ActionIcon[];
  bgcolor?: string;
}

export const TopAppBar: React.FC<CommonAppBarProps> = ({
  title = 'Title',
  showMenuIcon = true,
  showBackIcon = false,
  menuIconClick,
  backIconClick,
  actionButtonLabel = 'Action',
  actionButtonClick,
  actionButtonColor = 'inherit',
  position = 'static',
  color = 'transparent',
  actionIcons = [],
  bgcolor = '#FDF7FF',
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        component="nav"
        color={color}
        sx={{
          boxShadow: 'none',
          bgcolor,
        }}
      >
        <Toolbar>
          {showMenuIcon && (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={menuIconClick}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'center' }}
              >
                {title}
              </Typography>
            </>
          )}
          {showBackIcon && (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="back"
                onClick={backIconClick}
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'left' }}
              >
                {title}
              </Typography>
            </>
          )}
          {actionIcons.map((action, index) => (
            <IconButton
              key={index}
              color={actionButtonColor}
              aria-label={action.ariaLabel}
              //   onClick={action.onClick}
            >
              {action.icon}
            </IconButton>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
