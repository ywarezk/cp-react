/**
 * login component
 * email password are saved in the state
 */

import React from 'react';

export default class LoginController extends React.Component {
    state = {
        email: '',
        password: ''
    }

    setEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    setPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    setField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    /**
     * @param {string} fieldName
     */
    setFieldArg = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }
    
    /**
     * grab the email
     * grab the password
     * print them to the console
     */
    handleLogin = (event) => {
        console.log(
            `
                email: ${this.state.email}
                password: ${this.state.password}
            `
        );
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleLogin} noValidate >
                <div className="form-group">
                    <input
                        value={this.state.email.toUpperCase()}
                        onChange={(event) => {
                            this.setFieldArg(event, 'email')
                        } }
                        placeholder="email"
                        className="form-control"
                        type="email" 
                        name="email" />
                </div>
                
                <div className="form-group">
                    <input 
                        onChange={this.setField}
                        value={this.state.password}
                        placeholder="password"
                        className="form-control"
                        type="password" 
                        required
                        maxLength="10"
                        minLength="2"
                        name="password" />
                </div>
                
                <button 
                    className="btn btn-primary"
                     type="submit">Login</button>
            </form>
        )
    }
}