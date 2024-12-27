
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const imageSlice = createSlice({
    name: 'productimages',
    initialState,
    reducers: {
        add(state, action) {
            console.log('called add');

           return [...state, action.payload]
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
        // updateProduct: (state, action) => {
        //     // Update the product state with the deleted product
        //     return state.filter((product) => product.id !== action.payload);
        //   },
    }
}
)
export const { add, remove } = imageSlice.actions;
export default imageSlice.reducer;