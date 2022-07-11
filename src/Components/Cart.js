import React, { useState } from 'react'

const Cart = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (arg) => {
    setCartItems(cartItems => [...cartItems, arg])
  } 

  const removeFromCart = (arg) => {
    setCartItems(cartItems => [...cartItems, arg])
  }


  return (
    <div>Cart</div>
  )
}

export default Cart