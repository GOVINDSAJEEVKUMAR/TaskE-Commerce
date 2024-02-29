import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import {Route,Router,Routes} from "react-router-dom"
import Product from './Components/Product/Product'
import AddProduct from './Components/Product/AddProduct'
import Cart from "./Components/Cart/Cart"


const App = () => {
  return (
    <Routes>
      <Route path='' element={<NavBar/>}>
        <Route path='/'element={<Product/>}/>
        <Route path='/add'element={<AddProduct/>}/>
        <Route path='/cart'element={<Cart/>}/>
        </Route>
    </Routes>
  )
}

export default App
