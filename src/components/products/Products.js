import React from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './products.css';

function Products(props) {
  console.log(props);

  return (
    <Container id='productContainer' maxWidth="lg" data-testid="products">
      <Grid container spacing={4}>
        {props.products.length === 0 && (<Typography>No products yet.</Typography>)}
        {props.products.map((product, idx) => {
          return (
            <Grid item key={product.name} xs={12} sm={6} md={4}>
              <Card data-testid={`product-${product.name}`}>
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
                  <Button color="error" startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
                  <Button color="error" startIcon={<InfoOutlinedIcon />}>View Details</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
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
