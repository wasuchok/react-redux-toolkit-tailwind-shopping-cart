import { useSelector, useDispatch } from 'react-redux'

import { IncrementQuantity, DecrementQuantity, RemoveCart, SaveToLocalStorage, ClearCart } from '../reducer/cartSlice'

import { Toaster } from 'react-hot-toast';

const Cart = () => {
    const { product, cart } = useSelector((state) => ({...state}))
    const dispatch = useDispatch()

    const FormattedCart = cart.cart.map((prd, i) => {
        const findIndexProduct = product.prd.findIndex(e => e.id == prd.id)

        if(product.prd.length > 0) {
            return {
                title : product.prd[findIndexProduct].title,
                image : product.prd[findIndexProduct].image,
                price : product.prd[findIndexProduct].price,
                quantity : cart.cart[i].quantity
            }
        }

    })

    const Increment_Quantity = (i) => {
      dispatch(IncrementQuantity(i))
      dispatch(SaveToLocalStorage())
    }

    const Decrement_Quantity = (i) => {
      dispatch(DecrementQuantity(i))
      dispatch(SaveToLocalStorage())
    }

    const Remove_Cart = (i) => {
      dispatch(RemoveCart(i))
      dispatch(SaveToLocalStorage())
    }

    const Clear_Cart =  () => {
      dispatch(ClearCart())
      dispatch(SaveToLocalStorage())
    }

    const total = cart.cart.reduce((sum, prd) => sum + prd.price * prd.quantity ,0)

  return (
<div className="container mx-auto px-4 py-8">
  <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


{ product.prd.length > 0 ?
    FormattedCart.map((prd, i) =>
      <div className="bg-white shadow-md rounded-md p-4" key={i}>
      <img src={prd.image} alt="Product 1" className="w-44 mx-auto mb-4" />
      <h2 className="text-lg font-semibold mb-2">{prd.title}</h2>
      <p className="text-gray-600 mb-2">Price: {prd.price}</p>
      <div className="flex justify-between items-center">
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300" onClick={() => Remove_Cart(i)}>Remove</button>
        <div className="flex items-center">
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300" onClick={() => Decrement_Quantity(i)}>-</button>
          <span className="mx-2">{prd.quantity}</span>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300" onClick={() => Increment_Quantity(i)}>+</button>
        </div>
      </div>
    </div>
 ) : 
 <h1>Loading</h1>}


  </div>
  <div className="mt-8">
    <h2 className="text-lg font-semibold">Total: {total}</h2>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600" onClick={() => Clear_Cart()}>Checkout</button>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
  </div>
</div>

  )
}

export default Cart