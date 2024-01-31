import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice";
import themeSlice from "./themeSlice";
import ExpenseSlice from "./ExpenseSlice";

const appStore = configureStore(
    {
        reducer:{
            auth: authSlice,
            expenses: ExpenseSlice,
            theme: themeSlice

        }
    }
)

export default appStore;