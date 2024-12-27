import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const LoginSlice = createSlice({
    name: 'loginentry',
    initialState,
    reducers: {
        userLogin(state, action) {
            state.user = action.payload;
        },
        userLogout(state, action) {
            state.user = null;
        },
    }
})

export const { userLogin , userLogout } = LoginSlice.actions;
export default LoginSlice.reducer;