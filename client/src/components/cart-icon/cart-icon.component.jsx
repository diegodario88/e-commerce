import React, { useContext } from 'react'

import { CartContext } from '../../providers/cart/cart.provider'

import {
  CartIconContainer,
  ShoppingIconContainer,
} from './cart-icon.styles'

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext)
  return (
    <CartIconContainer onClick={toggleHidden}>
      <ShoppingIconContainer />
      <span>{cartItemsCount}</span>
    </CartIconContainer>
  )
}

export default CartIcon
