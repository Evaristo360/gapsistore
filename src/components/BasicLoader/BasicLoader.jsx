import React from 'react';
import Lottie from 'react-lottie-player';
import { Box } from '@mui/material';
import animationLoader from '../../assets/animations/loader.json';
import { Container, BottomText, Animation, Spinner } from './BasicLoaderStyles';

const BasicLoader = () => {
  return (
    <Container>
      <Lottie
        loop
        play
        animationData={animationLoader}
        className={Animation}
        speed={1.5}
      />

      <Spinner />

      <Box mt={0}>
        <BottomText variant="h6">
          Cargando...
        </BottomText>
      </Box>
    </Container>
  );
};

export { BasicLoader };