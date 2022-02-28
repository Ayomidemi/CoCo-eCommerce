import React from 'react'

import Home from './pages/Home'
import Product from './pages/Product'
import Catalog from './pages/Catalog'
import Cart from './pages/Cart'
import Login from './pages/Login'

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import GiftShop from './components/GiftShop'
import Contact from './components/Contact'


import {store} from './redux/store'
import {Provider} from 'react-redux'


// import your route components too

const App = () => {
  return (
    <BrowserRouter> 
<Provider store = {store} >
    < Header />
    <Routes>   
           
    <Route path="/" element={<Home />} />
    <Route path="catalog/:slug" element={<Product />} />
    <Route path="catalog" element={<Catalog />}></Route>
    <Route path="cart" element={<Cart />}></Route>
    <Route path="giftshop" element={<GiftShop />}></Route>
    <Route path="contact" element={<Contact />}></Route>
    <Route path="login" element={<Login />}></Route>
            
        
        </Routes>
        
        <Footer />


</Provider>

    </BrowserRouter> 
  )
}

export default App