
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const triggerSlice = createSlice({
    name: 'trigger',
    initialState,
    reducers: {
        ActiveTrigger(state, action) {
            return [action.payload];
        },
    }
}
)
export const { ActiveTrigger } = triggerSlice.actions;
export default triggerSlice.reducer;