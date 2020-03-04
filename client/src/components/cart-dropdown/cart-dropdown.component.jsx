import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartContext from '../../contexts/cart/cart.context'

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const { toggleHidden } = useContext(CartContext)

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
            <EmptyMessageContainer>
              Your cart is empty
        </EmptyMessageContainer>
          )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout')
          toggleHidden()
        }}
      >
        go to checkout
    </CartDropdownButton>
    </CartDropdownContainer>
  )
}


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.object,
}

export default withRouter(
  connect(mapStateToProps)(CartDropdown)
)
