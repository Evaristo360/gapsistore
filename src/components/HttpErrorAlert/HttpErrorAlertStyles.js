import styled from "@emotion/styled";
import { Typography } from '@mui/material';

const TypographyTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: 500
}));

const ErrorCodeContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(1),
  'span:last-of-type': {
    marginLeft: theme.spacing(1)
  }
}));

export { TypographyTitle, ErrorCodeContainer };