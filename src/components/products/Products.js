import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
// import './products.scss';

function Products(props) {
  console.log(props);

  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} direction="row">
      {props.products.length === 0 && (<Typography>No products yet.</Typography>)}
      {props.products.map((product, idx) => {
        return (
          <Grid container item xs={4} sm={4} md={4} justifyContent="center">
            <Card style={{ margin: '1rem' }} sx={{ width: 350 }} data-testid={`product-${product.productName}`}>
              <CardMedia
                component="img"
                height="200"
                image={product.img}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" data-testid={`product-name-${product.name}`}>
                  {product.name}
                </Typography>
                <Typography color="text.secondary" variant="body2" data-testid={`product-description-${product.name}`}>
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                <Button color="error">Add to Cart</Button>
                <Button color="error">View Details</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch({ type: 'SELECT_CATEGORY', payload: category }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
