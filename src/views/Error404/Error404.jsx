import { useNavigate } from 'react-router';
import Lottie from 'react-lottie-player';
import { Typography, Button } from '@mui/material';
import { Container, ErrorDetails } from './Error404Styles';
import lottieJson from '../../assets/animations/404.json';

function Error404() {
  const navigate = useNavigate();

  return (
    <Container>
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{
          height: '85%'
        }}
      />

      <ErrorDetails>
        <Typography color="primary" className="title">
          Página no encontrada
        </Typography>
        <Typography variant="body1" className="description">
          La página no existe o el contenido ya no está disponible
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/')}
        >
          Ir a la página de inicio
        </Button>
      </ErrorDetails>
    </Container>
  );
}

export { Error404 };