import React, { Component } from 'react'
import './sign-in.styles.scss'

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

                    <input
                        onChange={this.handleChange}
                        value={this.state.email}
                        type='email'
                        name='email'
                        required />
                    <label>Email</label>

                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        type='password'
                        name='password'
                        required />
                    <label>Password</label>

                    <input type="submit" value='Submit Form' />
                </form>
            </div>
        )
    }
}
