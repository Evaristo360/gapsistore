import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';

export const SearchField = ({ value, handleValue }) => {
  const [inputValue, setInputValue] = useState(value); // Estado local para el valor del input

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleValue(inputValue); // Llama a handleValue solo si se presiona Enter
    }
  };

  return (
    <Paper
      variant='outlined'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'search field' }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado local
        onKeyDown={handleKeyDown} // Maneja la tecla presionada
      />
      <IconButton sx={{ p: '10px' }} aria-label="search" disabled>
        <i className="fas fa-search"></i>
      </IconButton>
    </Paper>
  );
};