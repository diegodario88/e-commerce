import React, { useContext, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import CurrentUserContext from '../../contexts/current-user/current-user.context'
import CartContext from '../../contexts/cart/cart.context'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles'

const Header = () => {
  const currentUser = useContext(CurrentUserContext)
  const [hidden, setHidden] = useState(true)
  const toggleHidden = () => setHidden(!hidden)

  return (
    <CartContext.Provider value={
      { hidden, toggleHidden }
    }>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop"> SHOP </OptionLink>
          <OptionLink to="/contact"> CONTACT </OptionLink>
          {currentUser ? (
            <OptionLink as="div" onClick={() => auth.signOut()}>
              SIGN OUT
        </OptionLink>
          ) : (
              <OptionLink to="/signin">SIGN IN</OptionLink>
            )}

          <CartIcon />

        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
      </HeaderContainer>
    </CartContext.Provider>
  )
}
const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
})

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool,
}

export default connect(mapStateToProps)(Header)
