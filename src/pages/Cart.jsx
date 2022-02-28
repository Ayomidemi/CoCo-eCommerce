import React, { useEffect, useState } from 'react'
import '../styles/sass/Cart.scss'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Element from '../components/Element'
import CartItem from '../components/CartItem'
import Button from '../components/Button'

import productData from '../assets/fake-data/products'
import CommaNumbers from '../utilis/CommaNumbers'

const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    return (
        <Element title="Cart">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            You have {totalProducts} items in your shopping cart
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Price:</span> <span>{CommaNumbers(Number(totalPrice))}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Button size="block">
                            Proceed to Order
                        </Button>
                        <Link to="/catalog">
                            <Button size="block">
                                Continue Shopping
                            </Button>
                        </Link>
                        
                    </div>
                </div>
                <div className="cart__list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </Element>
    )
}

export default Cart