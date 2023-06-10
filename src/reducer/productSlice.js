import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    prd : [],
    input : ''
}

export const productSlice = createSlice({
    name : 'productSlice',
    initialState,
    reducers : {

        FetchProducts : (state, action) => {
            state.prd = action.payload
        },

        Search : (state, action) => {
            state.input = action.payload
        }

    }
})

export const { FetchProducts, Search } = productSlice.actions

export default productSlice.reducer