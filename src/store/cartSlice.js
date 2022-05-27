const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action) {
            state.cart = [...state.cart,action.payload];
        },

        removeCart(state, action) {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);  
        },
    },
});
export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;

/*
//const filterData =  state.filter((item) => item.cart.id !== action.payload);
            //console.warn('FilterData : ' , filterData);
            //return filterData;
*/