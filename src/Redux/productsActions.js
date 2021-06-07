import { fetchProducts } from '../api/api'
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, FIND_PRODUCT } from './productsConstants'

export const getProducts = () => (dispatch) => {

    const request = (isLoading) => ({ type: GET_PRODUCTS_REQUEST, isLoading })
    const success = (response) => ({ type: GET_PRODUCTS_SUCCESS, payload: response })
    const failure = (error) => ({ type: GET_PRODUCTS_FAILURE, error })

    dispatch(request(true))
    fetchProducts().then((response) => {
        dispatch(success(response));
        dispatch(request(false));
    }).catch(error => dispatch(failure(error)))
}

export const getFilteredProducts = (filter) => ({ type: FIND_PRODUCT, payload: filter })