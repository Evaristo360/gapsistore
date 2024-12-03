import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Typography
} from '@mui/material';
import { Images } from '../../assets'

const Header = () => {
  const { secondaryLogo } = Images;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="a"
            href="/"
            sx={{
              marginRight: { xs: 0, md: 1 },
              display: 'flex',
              flex: { xs: 1, md: 0 },
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <img
              src={secondaryLogo}
              alt="Gapsi Logo"
              style={{
                height: "2.5em"
              }}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            e-Commerce Gapsi
          </Typography>
        </Toolbar>
      </Container>
    </AppBar >
  );
};

export { Header };