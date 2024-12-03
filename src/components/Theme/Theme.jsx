import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { setItem } from '../../utils/persistentStorage';
import { useTheme } from './hooks/useTheme';

const Theme = () => {
  const { theme, availableSkins, handleChangeTheme } = useTheme();
  const { LIGHT, DARK } = availableSkins;

  const handleToggleTheme = () => {
    const selectedTheme = theme === LIGHT ? DARK : LIGHT;

    handleChangeTheme(selectedTheme);
    setItem('theme', selectedTheme);
  };

  const tooltipText = "Cambiar modo " + (theme === LIGHT ? "Oscuro" : "Claro")

  return (
    <Box mx={1}>
      <Tooltip title={tooltipText}>
        <IconButton
          edge="start"
          aria-label="change-theme"
          onClick={handleToggleTheme}
        >
          {theme === LIGHT ? (
            <i className="fas fa-sun" style={{ fontSize: '24px', color: 'gold' }}></i> // Ícono de sol
          ) : (
            <i className="fas fa-moon" style={{ fontSize: '24px', color: 'gray' }}></i> // Ícono de luna
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export { Theme };
