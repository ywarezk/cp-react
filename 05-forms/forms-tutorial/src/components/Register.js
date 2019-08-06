/**
 * login component
 * email password are saved in the state
 */

import withForms from '../compositions/with-forms';
import React from 'react';

class RegisterControlled extends React.Component {
    
    
    /**
     * grab the email
     * grab the password
     * print them to the console
     */
    handleRegister = (values) => {
        console.log(
            `
                email: ${values.email}
                password: ${values.password}
            `
        );
        
    }

    render() {
        return (
            <form onSubmit={(event) => this.props.onSubmit(event, this.handleRegister)} noValidate >


                <div className="form-group">
                    <input
                        value={this.props.values.firstName}
                        onChange={this.props.handleChange}
                        placeholder="First Name"
                        className="form-control"
                        type="text" 
                        name="firstName" />
                </div>

                <div className="form-group">
                    <input
                        value={this.props.values.lastName}
                        onChange={this.props.handleChange}
                        placeholder="First Name"
                        className="form-control"
                        type="text" 
                        name="lastName" />
                </div>

                <div className="form-group">
                    <input
                        value={this.props.values.email}
                        onChange={this.props.handleChange}
                        placeholder="email"
                        className="form-control"
                        type="email" 
                        name="email" />
                </div>
                
                <div className="form-group">
                    <input 
                        value={this.props.values.password}
                        onChange={this.props.handleChange}
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
                     type="submit">Register</button>
            </form>
        )
    }
}

export default withForms({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
})(RegisterControlled)