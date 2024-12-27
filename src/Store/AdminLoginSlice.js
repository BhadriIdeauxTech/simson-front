import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: null
};

const AdminLogin = createSlice({
    name: 'adminLogin',
    initialState,
    reducers: {
        superAdminLogin(state, action) {
            state.admin = action.payload;
        },
        superAdminLogout(state, action) {
            state.admin = null;
        },
    }
})

export const { superAdminLogin, superAdminLogout } = AdminLogin.actions;
export default AdminLogin.reducer;