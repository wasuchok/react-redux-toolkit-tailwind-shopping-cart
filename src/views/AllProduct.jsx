import { useEffect, useState, useMemo } from "react";
//redux toolkit
import { useSelector, useDispatch } from "react-redux";
import { AddItem, SaveToLocalStorage } from "../reducer/cartSlice";


import toast, { Toaster } from 'react-hot-toast';

const AllProduct = () => {
  const { product, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const Add_Item = (id, price, quantity) => {

    const item = {
        id,
        price,
        quantity
    }

    const findId = cart.cart.find(e => e.id == item.id)

    if(findId) {
        toast.error('เพิ่มสินค้าไปแล้วค่าบบ')
    } else {
        dispatch(AddItem(item))
        dispatch(SaveToLocalStorage())
    }
  }

  const SearchProducts = useMemo (() => {
    if(product.input.length < 3) return product.prd

    return product.prd.filter(item => {
      if(item.title.toLowerCase().includes(product.input.toLowerCase()) == false) {
        return false
      } else {
        return item.title.toLowerCase().includes(product.input.toLowerCase())
      }
    })
  })


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-14">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        { product.prd.length > 0
          ? SearchProducts.map((item, index) => (
              <div className="bg-white p-4 shadow-md rounded-md" key={index}>
                <img
                  src={item.image}
                  alt="Product 1"
                  className="w-40 h-44 mx-auto mb-4 rounded-md"
                />
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-500 truncate">{item.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-green-500 font-bold">$29.99</span>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => Add_Item(item.id, item.price, 1)}
                  >
                    <Toaster
                      position="top-right"
                      reverseOrder={false}
                    />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default AllProduct;
