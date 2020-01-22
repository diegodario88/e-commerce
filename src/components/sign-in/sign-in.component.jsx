import React, { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        className='form-input'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        type='email'
                        name='email'
                        label='email'
                        required />


                    <FormInput
                        className='form-input'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        type='password'
                        name='password'
                        label='password'
                        required />


                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                </form>
            </div>
        )
    }
}
