import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

const cartSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let prodID = action.payload.product.id;
            let quantity = action.payload.quantity;
            let isItemInCart = false;
            for(let i = 0; i < state.value.length; i++){
                if(state.value[i].product.id === prodID){
                    if(state.value[i].quantity >= 5)
                        return
                    let newQuantity = parseInt(state.value[i].quantity) + parseInt(quantity);
                    state.value[i].quantity =  newQuantity;
                    isItemInCart = true;
                    break;
                }
            }
            if(isItemInCart === false){
                state.value.push(action.payload);
            }
        },
        removeFromCart: (state, action) =>{
            let currCart = state.value;
            let itemID = action.payload.product.id;
            for(let i = 0; i < currCart.length; i++){
                if(currCart[i].product.id === itemID){
                    currCart[i].quantity -= action.payload.quantity;
                    if(currCart[i].quantity === 0)
                        currCart.splice(i, 1);
                    break;
                }
            }
            state.value = currCart;
        } 
    } 
})

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;