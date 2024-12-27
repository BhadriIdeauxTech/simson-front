import { createSlice } from "@reduxjs/toolkit";

const initialState = [] ;

const DisplaynameSlice = createSlice({
    name : 'displayname',
    initialState,
    reducers : {
        add(state,action){
            return [action.payload];
        },
    }
})

export const {add} = DisplaynameSlice.actions;
export default DisplaynameSlice.reducer;