import { Grid2, Card, CardMedia, CardContent, Typography } from '@mui/material';


const CardItem = ({ name, image, description }) => {
  return (
    <Grid2 item size={{ xs: 4, md: 3 }}>
      <Card sx={{ width: "100%" }} variant='outlined'>
        {image &&
          <CardMedia
            sx={{ minHeight: 140, objectFit: 'fill' }}
            image={image}
            title={name + "item"}
          />
        }
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name || ''}
          </Typography>
          <Typography gutterBottom variant="h6">
            {description || 'description'}
          </Typography>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export { CardItem };