import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart';
import { Grid, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import './products.scss';

const Products = (props) => {

  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} direction="row">
      {props.products.length === 0 && (<Typography>No products yet.</Typography>)}
      {props.products.map((product, idx) => {

        return (
          <Grid container item xs={4} sm={4} md={4} justifyContent="center">
            <Card style={{ margin: '1rem' }} sx={{ width: 350 }} data-testid={`product-${product.name}`}>
              <CardMedia
                component="img"
                height="200"
                image={product.img}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div" data-testid={`product-name-${product.name}`}>
                  {product.name}
                </Typography>
                <Typography color="text.secondary" variant="body2" data-testid={`product-description-${product.name}`}>
                  {product.description}
                </Typography>
                <Typography variant="caption">
                  <strong>${product.price}</strong> ( {product.count} in stock )
                </Typography>
              </CardContent>
              <CardActions style={{ display: 'flex', justifyContent: 'center', marginTop: '-1.5rem' }}>
                <Button
                  onClick={() => addToCart(product)}
                  color="error"
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
                <Button color="error" startIcon={<InfoOutlinedIcon />}>View Details</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    counts: state.products.products.map(product => {
      return product.count;
    })
  };
};

const mapDispatchToProps = dispatch => ({
  // selectCategory: (category) => dispatch({ type: 'SELECT_CATEGORY', payload: category }),
  addToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
