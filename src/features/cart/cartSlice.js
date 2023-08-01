import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems : cartItems,
    amount : 1,
    total : 0,
    isLoading: true

}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart : (store)=>{
            store.cartItems = []
        },
        removeItem : (store,action) => {
            const itemId = action.payload
            store.cartItems = store.cartItems.filter((item)=>item.id !== itemId)
        },
        increase : (store,{payload}) =>{
            const cartItem = store.cartItems.find((item)=> item.id === payload.id);
            // console.log(store.cartItems)
            cartItem.amount = cartItem.amount + 1;
        },
        decrease : (store,{payload}) =>{
            const cartItem = store.cartItems.find((item)=> item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        }
    }
}) 

// console.log(cartSlice)

export const {clearCart,removeItem,increase,decrease} = cartSlice.actions;

export default cartSlice.reducer;