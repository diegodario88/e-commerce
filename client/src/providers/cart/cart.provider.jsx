import React, { createContext, useState, useEffect } from 'react'

import {
    addItemToCart,
    removeItemFromCart,
    filterItemFromCart,
    handleCartItemsCount,
    handdleCartItemsTotal
} from './cart.utils'

export const CartContext = createContext({
    hidden: true,
    cartitems: [],
    cartItemsCount: 0,
    toggleHidden: () => { },
    addItem: () => { },
    removeItem: () => { },
    clearItemFromCart: () => { },
    cartItemsTotal: () => { }
})

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)

    const addItem = item => setCartItems(addItemToCart(cartItems, item))
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))
    const toggleHidden = () => setHidden(!hidden)
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item))
    const cartItemsTotal = () => handdleCartItemsTotal(cartItems)

    useEffect(() => {
        setCartItemsCount(handleCartItemsCount(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider
            value={{
                hidden,
                cartItems,
                addItem,
                removeItem,
                cartItemsCount,
                toggleHidden,
                cartItemsTotal,
                handleCartItemsCount,
                clearItemFromCart
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider