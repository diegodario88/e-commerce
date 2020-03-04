import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import CartContext from '../../contexts/cart/cart.context'

import {
  CartIconContainer,
  ShoppingIconContainer,
} from './cart-icon.styles'

const CartIcon = ({ itemCount }) => {
  const { toggleHidden } = useContext(CartContext)
  return (
    <CartIconContainer onClick={toggleHidden}>
      <ShoppingIconContainer />
      <span>{itemCount}</span>
    </CartIconContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

CartIcon.propTypes = {
  itemCount: PropTypes.number,
}

export default connect(mapStateToProps)(CartIcon)
