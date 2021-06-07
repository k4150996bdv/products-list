import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, FIND_PRODUCT } from './productsConstants'

const initialState = {
    products: [],
    filteredProducts: [],
    isLoading: false
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_PRODUCTS_REQUEST: {
            return { ...state, isLoading: action.isLoading }
        }
        case GET_PRODUCTS_SUCCESS: {
            return { ...state, products: action.payload, filteredProducts: action.payload, isLoading: false }
        }
        case GET_PRODUCTS_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        case FIND_PRODUCT: {
            return { ...state, filteredProducts: action.payload }
        }
        default: return state
    }
}
export default productReducer