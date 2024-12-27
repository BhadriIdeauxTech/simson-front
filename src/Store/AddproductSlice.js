import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
};

const AddproductSlice = createSlice({
    name: 'addproducts',
    initialState,
    reducers: {
        addProduct(state, action) {
            // state?.products.push(action.payload)
            return {
                ...state,
                products: [...action.payload]
            }
        },
        // updateProducts(state, action) {
        //     state?.products.push(action.payload) 
        // }
    }
})

export const { addProduct, updateProducts } = AddproductSlice.actions;
export default AddproductSlice.reducer;