import { Grid2, Card, CardMedia, CardContent, Typography, Tooltip } from '@mui/material';


const CardItem = ({ name, image, description, price }) => {
  const formattedPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Grid2 item size={{ xs: 4, md: 3 }}>
      <Card sx={{ width: "100%" }} variant='outlined'>
        {image &&
          <CardMedia
          sx={{ minHeight: 150, objectFit: 'fill', backgroundSize: "contain" }}
            image={image}
            title={name + "item"}
          />
        }
        <CardContent >
          <Grid2 container spacing={2}>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <Tooltip title={name || ''} arrow>
                <Typography gutterBottom variant="h5" fontSize={"1rem"} noWrap color='primary'>
                  {name || ''}
                </Typography>
              </Tooltip>
            </Grid2>
            <Grid2 item size={{ xs: 12, md: 6 }}>
              <Typography gutterBottom variant="h6" color='info'>
                {formattedPrice(price) || ''}
              </Typography>
            </Grid2>
            <Grid2 item size={{ xs: 12 }} >
              <Tooltip title={description || ''} arrow>
                <Typography
                  gutterBottom
                  variant="h6"
                  fontSize={"0.75rem"}
                  color='textSecondary'
                  height={100}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  display="block"
                >
                  {description || ''}
                </Typography>
              </Tooltip>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export { CardItem };