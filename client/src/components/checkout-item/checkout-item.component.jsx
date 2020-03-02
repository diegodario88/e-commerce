import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions'

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles'

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addItem,
  removeItem,
}) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}> &#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>$ {price.toFixed(1)}</TextContainer>
      <RemoveButtonContainer
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  )
}

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
  clearItemFromCart: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
}

const mapDispatchToProps = dispach => ({
  clearItemFromCart: item => dispach(clearItemFromCart(item)),
  addItem: item => dispach(addItem(item)),
  removeItem: item => dispach(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
