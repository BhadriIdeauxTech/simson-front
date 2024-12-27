import { configureStore, combineReducers } from "@reduxjs/toolkit";
import LoginReducer from "./LoginSlice";
import AddproductSlice from "./AddproductSlice";
import imageSlice from "./imageSlice";
import DisplaynameSlice from "./DisplaynameSlice";
import TriggerSlice from "./TriggerSlice";
import AdminLoginReducer from "./AdminLoginSlice"

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist:['loginentry','admin']
}

const reducer = combineReducers({
    loginentry: LoginReducer,
    addproducts: AddproductSlice,
    productimages: imageSlice,
    displayname: DisplaynameSlice,
    trigger: TriggerSlice,
    admin:AdminLoginReducer,
})

const persistedReducer = persistReducer(persistConfig,reducer);

const store = configureStore(
    {
        reducer: persistedReducer
    }
)

export default store