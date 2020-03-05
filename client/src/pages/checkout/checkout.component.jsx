import React, { useContext } from 'react'

import { CartContext } from '../../providers/cart/cart.provider'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout.styles'

const Checkout = () => {
  const { cartItems, cartItemsTotal } = useContext(CartContext)

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        <span>TOTAL: $ {cartItemsTotal(cartItems).toFixed(2)}</span>
      </TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
      <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>

      <StripeButton price={cartItemsTotal} />
    </CheckoutPageContainer>
  )
}

export default Checkout
