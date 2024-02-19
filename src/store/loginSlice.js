import {createSlice} from "@reduxjs/toolkit"

const initialLoginState={
    // showLogin: false,
    showLogin: localStorage.getItem("showLogin")==="true" || false,
    token: "",
    email: "",

};

const loginSlice=createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers: {
        login(state,action){
            state.token=action.payload.token;
            state.email=action.payload.email;
        },
        logout(state,action){
            

        },
        showLogin(state,action){
            state.showLogin=!state.showLogin;
            localStorage.setItem("showLogin",state.showLogin);
        }
    }
})
export const loginAction =loginSlice.actions;
export default loginSlice.reducer;