import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useLoader } from './hooks/useLoader';
import { StyledBackdrop as Backdrop } from './LoaderStyles';

const Loader = (props) => {
  const { children, topText, bottomText } = props;
  const { show, texts } = useLoader();

  const textRender = (text) =>
    text ? (
      <Box m={4}>
        <Typography variant="h5">{text}</Typography>
      </Box>
    ) : null;

  return (
    <Backdrop open={show || false} >
      {children ? (
        children
      ) : (
        <>
          {textRender(topText || texts.topText)}
          <CircularProgress color="inherit" size={56} />
          {textRender(bottomText || texts.bottomText)}
        </>
      )}
    </Backdrop>
  );
};

export { Loader };
