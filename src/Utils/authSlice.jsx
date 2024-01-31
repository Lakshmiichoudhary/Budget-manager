import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{
        user: null,
        token: null,
    },
    reducers:{
        addUser:(state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        removeUser:(state,action) => {
            state.user = null;
            state.token = null;
        },
        activatePremium: (state) => {
            state.isPremium = true;
        },
    }
})

export const {addUser,removeUser,activatePremium} = authSlice.actions

export default authSlice.reducer