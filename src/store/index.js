import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const store=configureStore({
    reducer:{
        cartSliceReducer:CartSlice
    }
})
export default store;