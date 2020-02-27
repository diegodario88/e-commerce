import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import './App.css'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Checkout from './pages/checkout/checkout.component'

import {
  auth,
  createUserProfileDocument,
} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

let unsubscribeFromAuth = null

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const checkUserSession = () => {
      unsubscribeFromAuth = auth.onAuthStateChanged(
        async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth)

            userRef.onSnapshot(snapShot => {
              setCurrentUser({ id: snapShot.id, ...snapShot.data() })
            })
          } else {
            setCurrentUser(userAuth)
          }
        }
      )
    }

    checkUserSession()

    return function cleanup() {
      unsubscribeFromAuth()
    }
  }, [setCurrentUser])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </Switch>
    </div>
  )
}

App.propTypes = {
  setCurrentUser: PropTypes.func,
  currentUser: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
