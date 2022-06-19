import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products";
import cartReducer from './features/cartState'

export const store = configureStore({
    reducer: {
        productReducer,
        cartReducer
    },
});
