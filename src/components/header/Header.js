import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import { grey } from '@mui/material/colors';
// import './header.scss';

const Header = ({cartItems}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#3b3b43' }}>
        <Toolbar>
          <Typography ml={4} variant="h2" component="div" sx={{ flexGrow: 1 }}>
            <StoreMallDirectoryOutlinedIcon sx={{ fontSize: 60, mb: '-.65rem', color: grey[500] }} />
            Virtual Store
          </Typography>
          <Button color="inherit" variant="outlined" startIcon={<ShoppingCartRoundedIcon />}>Cart ({cartItems})</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart.products.length
  };
};

export default connect(mapStateToProps)(Header);
