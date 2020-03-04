import React, { useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Checkout from './pages/checkout/checkout.component'
import CurrentUserContext from './contexts/current-user/current-user.context'

import {
  auth,
  createUserProfileDocument,
} from './firebase/firebase.utils'


const App = () => {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {

    return auth.onAuthStateChanged(
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

  }, [setCurrentUser])

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
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

export default App
