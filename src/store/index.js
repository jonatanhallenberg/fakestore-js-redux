
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import cartReducer from './cartReducer';

const store = configureStore({
    reducer: combineReducers({
        products: productsSlice.reducer,
        cart: cartReducer,
    })
})

export default store;