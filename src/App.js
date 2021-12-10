import './App.css';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Categories from './components/categories/Categories.js';
import Products from './components/products/Products.js';
import { Grid } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Categories className="categories" />
      <Grid ml={8} mr={8} justifyContent="space-around" >
        <Products />
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
