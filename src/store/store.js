import { configureStore } from "@reduxjs/toolkit";

//productSlice
import productSlice from "../reducer/productSlice";

//cartSlice
import cartSlice from "../reducer/cartSlice";

export const store = configureStore({
    reducer : {
        product : productSlice,
        cart : cartSlice
    }
})