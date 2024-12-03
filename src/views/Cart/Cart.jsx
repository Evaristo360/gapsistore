import { useState } from 'react';
import { Container, Grid2, Typography, Card, CardContent, Menu, MenuItem, IconButton } from '@mui/material';
import { CardItem } from '../../components/CardItem';
import { config } from '../../providers/config';
import { useCart } from './useCart';
import { SearchField } from '../../components/SearchField';

export const Cart = () => {
  const { items, search, setSearch, resetCart } = useCart();
  const { endpoints } = config;
  const { apiKey, mainBackendUrl } = endpoints;

  // Estado para manejar el menú
  const [anchorEl, setAnchorEl] = useState(null);

  // Función para abrir el menú
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Función para cerrar el menú
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Función para reiniciar la búsqueda
  const handleReset = () => {
    resetCart(); // Llama a la función para reiniciar
    handleMenuClose(); // Cierra el menú
  };

  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <Typography variant='h4' color={"primary"}>
            Productos
          </Typography>
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 6 }} >
          <Card sx={{ width: "100%" }} variant='outlined'>
            <CardContent >
              <Grid2 container spacing={2}>
                <Grid2 item size={{ xs: 12 }}>
                  <i class="fa-solid fa-cart-shopping" style={{ fontSize: 24, textAlign: "center", width: "100%" }}></i>
                </Grid2>
                <Grid2 item size={{ xs: 12 }} >
                  <Typography
                    gutterBottom
                    variant="h6"
                    color='textSecondary'
                    textAlign={"center"}
                    width="100%"
                  >
                    Carrito
                  </Typography>
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item size={{ xs: 11 }}>
          <SearchField value={search} handleValue={setSearch}></SearchField>
        </Grid2>
        <Grid2 item size={{ xs: 1 }}>
          <IconButton
            variant="contained"
            color="primary"
            onClick={handleMenuClick}
          >
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleReset}>Reiniciar Búsqueda</MenuItem>
          </Menu>
        </Grid2>
        {items.map((item, index) => (
          <CardItem key={"item" + index} name={item.title} description={item.description} image={item.image} price={item.price} />
        ))}
      </Grid2>
    </Container>
  );
}