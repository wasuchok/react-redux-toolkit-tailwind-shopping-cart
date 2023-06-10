//react-router-dom
import { Routes, Route, Link } from 'react-router-dom'

//react
import { useEffect } from 'react'

//axios
import axios from 'axios'

//redux toolkit
import { useDispatch } from 'react-redux'
import { LoadToLocalStorage } from './reducer/cartSlice'
import { FetchProducts } from "./reducer/productSlice";

import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import AllProduct from './views/AllProduct'
import Cart from './views/Cart'


const App = () => {
  const dispatch = useDispatch()

  const Fetch_Products = async () => {
    await axios
      .get(`${import.meta.env.VITE_API}`)
      .then((response) => {
        dispatch(FetchProducts(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    Fetch_Products()
    dispatch(LoadToLocalStorage())
  }, [])

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={ <AllProduct /> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
    <Footer />
    </>
  )
}

export default App