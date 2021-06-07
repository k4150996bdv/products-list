import { applyMiddleware, combineReducers, createStore } from "redux"
import productReducer from "./productReducer"
import thunk from "redux-thunk"

let reducers = combineReducers({
    product: productReducer
})
const store = createStore (reducers, applyMiddleware(thunk))


export default store;
window.store = store