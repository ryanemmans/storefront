import React from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@mui/material';
// import './categories.scss';
// stack typography from mui

function Categories(props) {
  return (
    <Box mt={2} data-testid="categories">
      {props.categories.map(category => {
        return (
          <Button color="error" key={category} onClick={() => props.selectCategory(category)} data-testid={`category-btn-${category}`}>{category}</Button>
        );
      })}
    </ Box>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
  };
};

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch({ type: 'SELECT_CATEGORY', payload: category }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
