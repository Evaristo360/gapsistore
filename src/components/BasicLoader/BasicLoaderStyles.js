import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const BottomText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '0.2625rem',
  fontWeight: 'bold',
  color: theme.palette.common.white,
}));

const Animation = styled('div')({
  width: 450,
});

// Spinner styles
const Spinner = styled('div')(({ theme }) => ({
  width: '100px',
  height: '100px',
  pointerEvents: 'none',
  animation: 'logo-spin infinite 1.5s',

  '@media (prefers-reduced-motion: no-preference)': {
    animation: 'logo-spin infinite 1.5s',
  },

  '@keyframes logo-spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

export { Container, BottomText, Animation, Spinner };