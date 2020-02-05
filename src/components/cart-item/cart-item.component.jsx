import React from 'react'
import PropTypes from 'prop-types'

import {
  CartItemContainer,
  ItemsDetailsContainer,
} from './car-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />

    <ItemsDetailsContainer>
      <span> {name} </span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemsDetailsContainer>
  </CartItemContainer>
)

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default CartItem
