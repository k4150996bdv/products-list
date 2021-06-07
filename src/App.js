import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { getProducts, getFilteredProducts } from './Redux/productsActions';
import Product from "./components/Product";
import Preloader from './components/Preloader';
import ChangeLenguagesButtons from './components/ChangeLenguagesButtons';
import SearchInputForm from './Forms/SearchInput';

const App = ({ products, filteredProducts, getProducts, getFilteredProducts, isLoading }) => {
  const location = useLocation();
  const history = useHistory();
  const [categoryNameFilter, setCategoryNameFilter] = useState(location.search?.split('=')[1]?.split("&name")[0] ? location.search?.split('=')[1]?.split("&name")[0] : '')
  const [productName, setProductName] = useState(location.search?.split('=')[2] ? location.search.split('=')[2] : "")

  useEffect(() => {
    getProducts()
  }, [getProducts]);

  useEffect(() => {
    if (categoryNameFilter) {
      filteredCategories(decodeURIComponent(categoryNameFilter))
    }
  }, [products, categoryNameFilter])

  const formatURL = (search, filter) => {
    return `?category=${filter}&name=${search}`
  }
  const filteredProductsByName = (product) => {
    return product.name.toLowerCase().includes(productName.toLowerCase())
  }
  const submitHandler = (values) => {
    let search = values.search
    let filter = filteredProducts.filter(filteredProductsByName)
    getFilteredProducts(filter);
    setProductName(search)
    history.push(formatURL(search, categoryNameFilter));
  }

  const filteredCategories = (event) => {
    let filter = products.filter(product => product.bsr_category === event)
    getFilteredProducts(filter);
    setCategoryNameFilter(event);
    history.push(formatURL(productName, event));
  }

  const categories = [...new Set(products.map(({ bsr_category }) => bsr_category))]
  const isProductCategory = (product) => {
    if (!categoryNameFilter) {
      return product
    }
    if (product.bsr_category === categoryNameFilter) {
      return product
    }
  }

  return (
    <>
      <select onChange={(e) => filteredCategories(e.target.value)}>
        {categories.map(category =>
          <option defaultValue={category === categoryNameFilter} key={category} value={category} >{category}</option>)}</select>
      <Container>
        <ChangeLenguagesButtons />
        <SearchInputForm submitHandler={submitHandler} />
        <Grid container spacing={3}>
          {isLoading && <Preloader />}

          {products.filter(isProductCategory).filter(filteredProductsByName).map(product =>
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.asin}>
              <Paper>
                <Product product={product} />
              </Paper>
            </Grid>)}
        </Grid>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.product.products,
  filteredProducts: state.product.filteredProducts,
  isLoading: state.product.isLoading
});

export default connect(mapStateToProps, { getProducts, getFilteredProducts })(App);


