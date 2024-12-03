import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const AppBarSpacer = styled('div')(({ theme }) => theme.mixins.toolbar);

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));

export { AppBarSpacer, Container };