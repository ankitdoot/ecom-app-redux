import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const productSlice = createSlice({
    name: 'productData',
    initialState,
    reducers: {
        updateProducts: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {updateProducts} = productSlice.actions;

export default productSlice.reducer