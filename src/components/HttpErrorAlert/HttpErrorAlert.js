import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { TypographyTitle, ErrorCodeContainer } from './HttpErrorAlertStyles';

const HttpErrorAlert = (props) => {
  const { errorCode, errorMessage, onAccept } = props;

  return (
    <>
      <Box display="flex" flexDirection="column" className="modal-error">
        <Box>
          <TypographyTitle variant="h5" color="primary">
            ¡Algo va mal!
          </TypographyTitle>

          {errorMessage && (
            <Typography variant="body1">{errorMessage}</Typography>
          )}

          <Typography variant="body2">
            Para más información contacta al administrador del sistema.
          </Typography>

          <ErrorCodeContainer>
            <Typography variant="body2" component="span">
              Error
            </Typography>

            <Typography variant="body2" color="error" component="span">
              x00000{errorCode}
            </Typography>
          </ErrorCodeContainer>
        </Box>
      </Box>

      <Box mt={2} mb={1} textAlign="right">
        <Button color="primary" onClick={onAccept}>
          Aceptar
        </Button>
      </Box>
    </>
  );
};

export { HttpErrorAlert };