import React, { useState } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  })

  const { email, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = event => {
    const { value, name } = event.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          className="form-input"
          handleChange={handleChange}
          value={email}
          type="email"
          name="email"
          label="email"
          required
        />

        <FormInput
          className="form-input"
          handleChange={handleChange}
          value={password}
          type="password"
          name="password"
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In </CustomButton>

          <CustomButton onClick={signInWithGoogle} googleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
