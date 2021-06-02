import './App.css';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import Product from "./components/Product";
import { useEffect, useState } from 'react';
import withStore from './hocs/withStore';

const App = ({getProducts}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res)
      setFilteredProducts(res)
    })
  }, [getProducts]);

  const handleChange = (event) => {
    const filter = products.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredProducts(filter)
  };

  return (
    <div className="App">
      <Container>
        <TextField id="standard-full-width" label="Search" fullWidth margin="normal" onChange={handleChange} />
        <Grid container spacing={3}>
          {filteredProducts.map(product =>
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.asin}>
              <Paper>
                <Product product={product} />
              </Paper>
            </Grid>)}
        </Grid>
      </Container>
    </div>
  );
}

export default withStore(App);
