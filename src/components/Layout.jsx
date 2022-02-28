import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ProductModal from './ProductModal'

import {BrowserRouter, Routes, Route} from "react-router-dom";
// import your route components too

const Layout = () => {
  return (
    <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header {...props}/>
                    <div className="container">
                        <div className="main">
                            <Routes/>
                        </div>
                    </div>
                    <Footer/>
                    <ProductModal/>
                </div>
            )}/>
        </BrowserRouter>
  )
}

export default Layout