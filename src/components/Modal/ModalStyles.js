import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

export { StyledDialog };