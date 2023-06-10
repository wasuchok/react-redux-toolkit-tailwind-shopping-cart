import { createSlice } from "@reduxjs/toolkit"

import toast from 'react-hot-toast';

const initialState = {
    cart : [],
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {

        AddItem : (state, action) => {
            state.cart.push(action.payload)
            toast.success('เพิ่มสินค้าเรียบร้อยครับ!');
        },

        IncrementQuantity : (state, action) => {
            state.cart[action.payload].quantity += 1
        },

        DecrementQuantity : (state, action) => {
            state.cart[action.payload].quantity -= 1

            if(state.cart[action.payload].quantity == 0) {
                state.cart.splice(action.payload, 1)
            }
        },

        RemoveCart : (state, action) => {
            state.cart.splice(action.payload, 1)
        },

        ClearCart : (state, action) => {
            toast.success('เคลียตะกร้าเรียบร้อยค่าบบ!')
            state.cart = []
        },

        SaveToLocalStorage : (state, action) => {
            localStorage.setItem(`${import.meta.env.VITE_STORAGE}`, JSON.stringify(state.cart))
        },

        LoadToLocalStorage : (state, action) => {
            if(localStorage.getItem(`${import.meta.env.VITE_STORAGE}`)) {
                state.cart = JSON.parse(localStorage.getItem(`${import.meta.env.VITE_STORAGE}`))
            }
        },


    }
})

export const { AddItem, SaveToLocalStorage, LoadToLocalStorage, IncrementQuantity, DecrementQuantity, RemoveCart, ClearCart } = cartSlice.actions

export default cartSlice.reducer