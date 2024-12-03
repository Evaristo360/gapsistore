import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.loaderBackground,
  opacity: '0.95 !important', // Nota: El uso de !important puede no ser necesario
  zIndex: theme.zIndex.drawer + 2,
}));

export { StyledBackdrop };