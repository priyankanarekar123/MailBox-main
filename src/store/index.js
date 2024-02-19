import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './loginSlice'
import composeReducer from './composeSlice';
const store=configureStore({
    reducer: {login: loginReducer, compose: composeReducer}
})

export default store;